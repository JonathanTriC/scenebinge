import {apiGet} from '@api/wrapping';
import {_handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {URL_PATH} from '@constants/url';
import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseFetchDB} from '@services/firebase';
import {keepPreviousData, useQueries} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

const useHome = () => {
  const {navigateScreen} = useNavigate();
  const {mutate: fetchUser, data: userData} = useFirebaseFetchDB();
  const [page, setPage] = useState<number>(1);

  const getUser = async () => {
    const userUID = await _handlerGetItem(Keys.userUID);
    fetchUser(`/user/${userUID}`);
  };

  const [
    nowPlayingQueries,
    popularMovieQueries,
    actionMovieQueries,
    horrorMovieQueries,
    romanceMovieQueries,
    koreanDramaQueries,
    koreanActionQueries,
  ] = useQueries({
    queries: [
      {
        queryKey: ['nowPlaying', page],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieNowPlaying(page)}`,
          }).then((res: IMovieList[]) => res.splice(0, 5)),
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ['popularMovie', page],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieNowPlaying(page)}`,
          }).then((res: IMovieList[]) => res),
      },
      {
        queryKey: ['actionMovie', page],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieDiscover(
              page,
              'revenue',
              'with_genres=28,12',
            )}`,
          }).then((res: IMovieList[]) => res),
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ['horrorMovie', page],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieDiscover(
              page,
              'revenue',
              'with_genres=27,53',
            )}`,
          }).then((res: IMovieList[]) => res),
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ['romanceMovie', page],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieDiscover(
              page,
              'popularity',
              'with_genres=10749,35',
            )}`,
          }).then((res: IMovieList[]) => res),
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ['koreanDrama', page],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.koreanDramaDiscover(page, 18)}`,
          }).then((res: IMovieList[]) => res),
        placeholderData: keepPreviousData,
      },
      {
        queryKey: ['koreanAction', page],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.koreanDramaDiscover(page, 10759)}`,
          }).then((res: IMovieList[]) => res),
        placeholderData: keepPreviousData,
      },
    ],
  });

  useEffect(() => {
    getUser();
  }, []);

  return {
    navigateScreen,
    userData,
    nowPlayingQueries,
    popularMovieQueries,
    actionMovieQueries,
    horrorMovieQueries,
    romanceMovieQueries,
    koreanDramaQueries,
    koreanActionQueries,
    page,
    setPage,
  };
};

export default useHome;
