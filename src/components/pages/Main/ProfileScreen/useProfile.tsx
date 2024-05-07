import {_handlerClearItem, _handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseFetchDB, useFirebaseLogOut} from '@services/firebase';
import {useEffect} from 'react';
import FastImage from 'react-native-fast-image';

const useProfile = () => {
  const {navigateScreen, resetNavigate} = useNavigate();
  const {mutate: userLogOut} = useFirebaseLogOut();
  const {mutate: fetchUser, data: userData} = useFirebaseFetchDB();

  const getUser = async () => {
    const userUID = await _handlerGetItem(Keys.userUID);
    fetchUser(`/user/${userUID}`);
  };

  const logout = async () => {
    await _handlerClearItem();
    await FastImage.clearDiskCache();
    await FastImage.clearMemoryCache();
    await userLogOut();
  };

  const profileButtonList = [
    {
      icon: 'history',
      title: 'Watch History',
      action: () => {
        navigateScreen('WatchHistoryScreen');
      },
    },
    {
      icon: 'bookmark-outline',
      title: 'Watchlist',
      action: () => {
        navigateScreen('WatchlistScreen');
      },
    },
    {
      icon: 'logout',
      title: 'Logout',
      action: logout,
    },
  ];

  useEffect(() => {
    getUser();
  }, []);

  return {
    userData,
    profileButtonList,
    logout,
  };
};

export default useProfile;
