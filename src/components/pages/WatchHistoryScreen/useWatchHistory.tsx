import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseGetWatchHistory} from '@services/firebase';
import {useEffect} from 'react';

const useWatchHistory = () => {
  const {navigation, navigateScreen} = useNavigate();

  const {data: watchHistoryData, mutate: getWatchHistory} =
    useFirebaseGetWatchHistory();

  useEffect(() => {
    getWatchHistory();
  }, []);

  return {
    navigation,
    navigateScreen,
    watchHistoryData,
  };
};

export default useWatchHistory;
