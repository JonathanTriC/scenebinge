import {apiGet} from '@api/wrapping';
import {URL_PATH} from '@constants/url';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useQuery} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const formSchema = z.object({
  search: z.string(),
});

const useSearch = () => {
  const {navigation} = useNavigate();
  const {watch, control} = useForm({
    defaultValues: {
      search: '',
    },
    resolver: zodResolver(formSchema),
  });
  const searchTxt = watch('search');

  const {data: trendingSearchData} = useQuery<IMovieList[]>({
    queryKey: ['trendingSearch'],
    queryFn: async () => {
      const data = apiGet({
        url: URL_PATH.trendingMovie,
      });
      return data;
    },
  });

  const {data: searchQueryData, refetch} = useQuery<IMovieList[]>({
    queryKey: ['searchQuery'],
    queryFn: async () => {
      const data = await apiGet({
        url: URL_PATH.searchMovie(searchTxt ?? ''),
      });
      return data;
    },
  });

  useEffect(() => {
    refetch();
  }, [searchQueryData, searchTxt]);

  return {
    navigation,
    control,
    trendingSearchData,
    searchTxt,
    searchQueryData,
  };
};

export default useSearch;
