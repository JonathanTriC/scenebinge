import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseLogOut} from '@services/firebase';

const useProfile = () => {
  const {navigateScreen, resetNavigate} = useNavigate();
  const {mutate: userLogOut} = useFirebaseLogOut();

  const logout = async () => {
    await userLogOut();
  };

  return {
    logout,
  };
};

export default useProfile;
