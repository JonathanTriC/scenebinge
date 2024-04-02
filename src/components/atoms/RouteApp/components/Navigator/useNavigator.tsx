import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';

export const useNavigator = () => {
  const navigation: any = useNavigation();
  const routeRef = useRef<IRouteRef>({screenStack: [], screenName: ''});

  const screenListeners = () => ({
    state: async () => {
      // const datauser = (await AsyncStorage.getItem(Keys.dataUser)) || false;
      // const token = (await AsyncStorage.getItem(Keys.token)) || false;
      const currentRouteName = navigation?.getCurrentRoute()?.name;
      routeRef.current.screenName = currentRouteName;
      routeRef.current.screenStack.push(currentRouteName);
      console.log(
        '🚀 ~ file: useNavigator.tsx:22 ~ state: ~ currentRouteName:',
        currentRouteName,
      );

      // const isNotAuthScreen =
      //   listScreenDontNeetAuth?.includes(currentRouteName);

      // if (!datauser && !isNotAuthScreen && !token) {
      //   dispatch(loginDestroy());
      //   dispatch(getUserDestroy());
      //   dispatch(verifyOtpDestroy());
      //   dispatch(todayAttendanceDestroy());
      //   navigation.navigate('Autentikasi', {});
      //   // showWarningToast('Anda telah login di perangkat lainnya', {
      //   //   visibilityTime: 5000,
      //   // });
      // }
    },
  });

  return {screenListeners};
};
