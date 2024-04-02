import {Keys} from '@constants/keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

const useSplashScreen = (navigation: any) => {
  const handleNavigationAfterSplash = () => {
    const boot = async () => {
      return await AsyncStorage.getItem(Keys.onboarded);
    };

    const timeout = setTimeout(() => {
      boot().then(val => {
        if (val) {
          navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
        } else {
          navigation.reset({index: 0, routes: [{name: 'OnboardingScreen'}]});
        }
      });
    }, 3000);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    handleNavigationAfterSplash();
  }, []);

  return {};
};

export {useSplashScreen};
