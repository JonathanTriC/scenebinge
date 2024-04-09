import {apiGet} from '@api/wrapping';
import {URL_PATH} from '@constants/url';
import {useQueries} from '@tanstack/react-query';
import {useEffect, useState} from 'react';

const useExplore = () => {
  const [trendingMovieQueries, trendingTvQueries] = useQueries({
    queries: [
      {
        queryKey: ['trendingMovie'],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.trendingMovie}`,
          }).then((res: IMovieList[]) => res.splice(0, 10)),
      },
      {
        queryKey: ['trendingTv'],
        queryFn: () =>
          apiGet({
            url: `${URL_PATH.trendingTv}`,
          }).then((res: IMovieList[]) => res.splice(0, 10)),
      },
    ],
  });
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState<{
    title: string;
    data: IMovieList[];
  }>({
    title: '',
    data: [],
  });

  const filterList = [
    {
      title: 'Trending Movies',
      isActive: false,
      data: trendingMovieQueries?.data,
    },
    {
      title: 'Trending TV Series',
      isActive: false,
      data: trendingTvQueries?.data,
    },
  ];

  useEffect(() => {
    setFilter({
      title: 'Trending Movies',
      data: trendingMovieQueries?.data ?? [],
    });
  }, [trendingMovieQueries?.data]);

  return {
    filterList,
    index,
    setIndex,
    filter,
    setFilter,
  };
};

export default useExplore;
