import {apiGet} from '@api/wrapping';
import {
  _handlerGetItem,
  checkIsWatchHistoryExist,
  checkIsWatchlistExist,
} from '@constants/functional';
import {URL_PATH} from '@constants/url';
import {useNavigate} from '@hooks/useNavigate';
import {
  useFirebaseAddWatchHistory,
  useFirebaseAddWatchList,
  useFirebaseDeleteWatchList,
} from '@services/firebase';
import {useQuery} from '@tanstack/react-query';
import {useCallback, useEffect, useRef, useState} from 'react';

const useDetailMovie = () => {
  const {navigateScreen, popScreen, getRouteParams} = useNavigate();
  const {movieID, title} = getRouteParams<DetailMovieScreenParams>();
  const scrollViewRef: any = useRef(null);
  const [scrolledTop, setScrolledTop] = useState(true);
  const onScroll = useCallback(({nativeEvent}: any) => {
    setScrolledTop(nativeEvent.contentOffset.y <= 0);
  }, []);

  const [getNewMovieID, setNewMovieID] = useState<number>();
  const [newMovieTitle, setNewMovieTitle] = useState<string>();
  const [isExist, setIsExist] = useState<boolean>(false);
  const [isWatchHistoryExist, setIsWatchHistoryExist] =
    useState<boolean>(false);
  const [docId, setDocId] = useState<string>('');
  const [isClickPlay, setClickPlay] = useState<boolean>(false);

  const {mutate: addWatchlist} = useFirebaseAddWatchList();
  const {mutate: removeWatchlist} = useFirebaseDeleteWatchList();
  const {mutate: addWatchHistory} = useFirebaseAddWatchHistory();

  const {data: detailMovieData, refetch: refetchMovie} = useQuery<IMovieDetail>(
    {
      queryKey: ['detailMovie'],
      queryFn: async () => {
        const res = await apiGet({
          url: URL_PATH.detailMovie(!getNewMovieID ? movieID : getNewMovieID),
          fullResponse: true,
        });
        return res;
      },
    },
  );

  const {data: detailTvData, refetch: refetchTv} = useQuery<IMovieDetail>({
    queryKey: ['detailTv'],
    queryFn: async () => {
      const res = await apiGet({
        url: URL_PATH.detailTV(!getNewMovieID ? movieID : getNewMovieID),
        fullResponse: true,
      });
      return res;
    },
  });

  const detailData =
    (detailMovieData?.title ?? detailMovieData?.name) === title
      ? detailMovieData
      : (detailMovieData?.title ?? detailMovieData?.name) === newMovieTitle
      ? detailMovieData
      : detailTvData;

  const isWatchlistExist = checkIsWatchlistExist(newMovieTitle ?? title).then(
    exist => {
      setIsExist(exist);
    },
  );

  const isHistoryExist = checkIsWatchHistoryExist(newMovieTitle ?? title).then(
    exist => {
      setIsWatchHistoryExist(exist);
    },
  );

  const watchlistDocId = async () => {
    try {
      const docId = await _handlerGetItem(`watchlist${newMovieTitle ?? title}`);
      setDocId(docId ?? '');
    } catch (error) {}
  };

  const onClickWatch = (item: VideosResult) => {
    setClickPlay(!isClickPlay);
    const data: FirebaseAddWatchList = {
      id: detailData?.id ?? 0,
      title: detailData?.title ?? detailData?.name ?? '',
      poster_path: detailData?.poster_path ?? '',
    };
    if (!isWatchHistoryExist) {
      addWatchHistory(data);
    }
    navigateScreen<WatchScreenParams>('WatchScreen', {
      youtubeKey: item?.key ?? '',
      name: item?.name ?? '',
    });
  };

  useEffect(() => {
    refetchMovie();
    refetchTv();
  }, [movieID, getNewMovieID]);

  useEffect(() => {
    watchlistDocId();
  }, [title, newMovieTitle]);

  return {
    navigateScreen,
    popScreen,
    addWatchlist,
    removeWatchlist,
    detailData,
    scrollViewRef,
    onScroll,
    scrolledTop,
    setNewMovieID,
    setNewMovieTitle,
    isExist,
    docId,
    isClickPlay,
    setClickPlay,
    onClickWatch,
  };
};

export default useDetailMovie;
