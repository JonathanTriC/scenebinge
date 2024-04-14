import {OnboardingScreen, SplashScreen} from '@components/pages';
import {LoginScreen, SignUpScreen} from '@components/pages/Authentication';
import {BottomTabNavigator, HomeScreen} from '@components/pages/Main';
import {ExploreScreen} from '@components/pages/Main/ExploreScreen';
import {ProfileScreen} from '@components/pages/Main/ProfileScreen';
import {MoreMoviesScreen} from '@components/pages/MoreMoviesScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ParamList} from 'type/screen';
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
      <Stack.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={'ExploreScreen'} component={ExploreScreen} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <Stack.Screen name={'MoreMoviesScreen'} component={MoreMoviesScreen} />
    </Stack.Navigator>
  );
};
