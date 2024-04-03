import {OnboardingScreen, SplashScreen} from '@components/pages';
import {LoginScreen, SignUpScreen} from '@components/pages/Authentication';
import {HomeScreen} from '@components/pages/Main';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useNavigator} from './useNavigator';

const Stack = createStackNavigator<ParamList>();
type NavigatorProps = {};

export const Navigator: React.FC<NavigatorProps> = () => {
  const {screenListeners} = useNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenListeners={screenListeners}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
    </Stack.Navigator>
  );
};
