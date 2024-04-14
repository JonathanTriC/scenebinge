import {useNavigate} from '@hooks/useNavigate';
import {MoreMoviesScreenParams} from 'type/screen';

const useMoreMovies = () => {
  const {navigation, getRouteParams} = useNavigate();
  const {title, query} = getRouteParams<MoreMoviesScreenParams>();

  return {
    navigation,
    title,
    query,
  };
};

export default useMoreMovies;
