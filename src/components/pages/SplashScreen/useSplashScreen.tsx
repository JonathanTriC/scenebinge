import {_handlerGetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import {firebase} from '@react-native-firebase/auth';
import {useEffect} from 'react';

const useSplashScreen = (navigation: any) => {
  const handleNavigationAfterSplash = () => {
    const boot = async () => {
      return await _handlerGetItem(Keys.onboarded);
    };

    const timeout = setTimeout(() => {
      boot().then(val => {
        if (val) {
          checkIsUserLoggedIn();
        } else {
          navigation.reset({index: 0, routes: [{name: 'OnboardingScreen'}]});
        }
      });
    }, 3000);

    return () => clearTimeout(timeout);
  };

  const checkIsUserLoggedIn = () => {
    let user = firebase.auth().currentUser?.uid;
    if (user) {
      navigation.reset({index: 0, routes: [{name: 'BottomTabNavigator'}]});
    } else {
      navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
    }
  };

  useEffect(() => {
    handleNavigationAfterSplash();
  }, []);

  return {};
};

export {useSplashScreen};
