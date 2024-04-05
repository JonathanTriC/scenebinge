import {apiGet} from '@api/wrapping';
import {_handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {URL_PATH} from '@constants/url';
import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseFetchDB} from '@services/firebase';
import {useQueries} from '@tanstack/react-query';
import {useEffect} from 'react';

const useHome = () => {
  const {navigateScreen, resetNavigate} = useNavigate();
  const {mutate: fetchUser, data: userData} = useFirebaseFetchDB();

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
        queryKey: ['nowPlaying', 1],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieNowPlaying(1)}`,
          }).then((res: IMovieList[]) => res.splice(0, 5)),
      },
      {
        queryKey: ['popularMovie', 1],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieNowPlaying(1)}`,
          }).then((res: IMovieList[]) => res),
      },
      {
        queryKey: ['actionMovie', 1],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieDiscover(1, 'revenue', 'with_genres=28,12')}`,
          }).then((res: IMovieList[]) => res),
      },
      {
        queryKey: ['horrorMovie', 1],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieDiscover(1, 'revenue', 'with_genres=27,53')}`,
          }).then((res: IMovieList[]) => res),
      },
      {
        queryKey: ['romanceMovie', 1],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.movieDiscover(
              1,
              'popularity',
              'with_genres=10749,35',
            )}`,
          }).then((res: IMovieList[]) => res),
      },
      {
        queryKey: ['koreanDrama', 1],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.koreanDramaDiscover(1, 18)}`,
          }).then((res: IMovieList[]) => res),
      },
      {
        queryKey: ['koreanAction', 1],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.koreanDramaDiscover(1, 10759)}`,
          }).then((res: IMovieList[]) => res),
      },
    ],
  });

  useEffect(() => {
    getUser();
  }, []);

  return {
    userData,
    nowPlayingQueries,
    popularMovieQueries,
    actionMovieQueries,
    horrorMovieQueries,
    romanceMovieQueries,
    koreanDramaQueries,
    koreanActionQueries,
  };
};

export default useHome;
