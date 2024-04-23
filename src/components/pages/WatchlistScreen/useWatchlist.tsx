import {useNavigate} from '@hooks/useNavigate';

const useWatchlist = () => {
  const {navigation, navigateScreen} = useNavigate();

  return {
    navigation,
    navigateScreen,
  };
};

export default useWatchlist;
