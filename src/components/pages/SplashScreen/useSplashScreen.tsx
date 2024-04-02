import {useEffect} from 'react';

const useSplashScreen = (navigation: any) => {
  const handleNavigationAfterSplash = () => {
    navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
  };

  useEffect(() => {
    handleNavigationAfterSplash();
  }, []);

  return {};
};

export {useSplashScreen};
