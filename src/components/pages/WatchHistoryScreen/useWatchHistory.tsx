import {useNavigate} from '@hooks/useNavigate';

const useWatchHistory = () => {
  const {navigation, navigateScreen} = useNavigate();

  return {
    navigation,
    navigateScreen,
  };
};

export default useWatchHistory;
