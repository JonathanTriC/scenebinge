import {_handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseFetchDB, useFirebaseLogOut} from '@services/firebase';
import {useEffect} from 'react';

const useHome = () => {
  const {navigateScreen, resetNavigate} = useNavigate();
  const {mutate: fetchUser, data: userData} = useFirebaseFetchDB();
  const {mutate: userLogOut} = useFirebaseLogOut();

  const logout = async () => {
    await userLogOut();
  };
  const getUser = async () => {
    const userUID = await _handlerGetItem(Keys.userUID);
    fetchUser(`/user/${userUID}`);
  };
  useEffect(() => {
    getUser();
  }, []);

  return {
    userData,
    logout,
  };
};

export default useHome;
