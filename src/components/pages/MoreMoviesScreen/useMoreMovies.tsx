import {apiGet} from '@api/wrapping';
import {useNavigate} from '@hooks/useNavigate';
import {useInfiniteQuery} from '@tanstack/react-query';

const useMoreMovies = () => {
  const {navigation, navigateScreen, getRouteParams} = useNavigate();
  const {title, url_path} = getRouteParams<MoreMoviesScreenParams>();

  const {data, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: ['moreMovie'],
    queryFn: ({pageParam}) =>
      apiGet({
        url: `${url_path}&page=${pageParam}`,
      }).then((res: IMovieList[]) => res),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
  });

  const loadNextPageData = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const flattenData = data?.pages.flatMap(page => page);

  return {
    navigation,
    navigateScreen,
    title,
    data,
    flattenData,
    loadNextPageData,
  };
};

export default useMoreMovies;
