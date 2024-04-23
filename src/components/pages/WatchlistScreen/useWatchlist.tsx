import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseGetWatchList} from '@services/firebase';
import {useEffect} from 'react';

const useWatchlist = () => {
  const {navigation, navigateScreen} = useNavigate();

  const {data: watchlistData, mutate: getWatchlist} = useFirebaseGetWatchList();

  useEffect(() => {
    getWatchlist();
  }, []);

  return {
    navigation,
    navigateScreen,
    watchlistData,
  };
};

export default useWatchlist;
