import {
  CastScreen,
  DetailMovieScreen,
  OnboardingScreen,
  SearchScreen,
  SplashScreen,
  WatchHistoryScreen,
  WatchlistScreen,
} from '@components/pages';
import {LoginScreen, SignUpScreen} from '@components/pages/Authentication';
import {BottomTabNavigator, HomeScreen} from '@components/pages/Main';
import {ExploreScreen} from '@components/pages/Main/ExploreScreen';
import {ProfileScreen} from '@components/pages/Main/ProfileScreen';
import {MoreMoviesScreen} from '@components/pages/MoreMoviesScreen';
import {windowHeight} from '@constants/utils';
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
      <Stack.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={'ExploreScreen'} component={ExploreScreen} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
      <Stack.Screen name={'MoreMoviesScreen'} component={MoreMoviesScreen} />
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
      <Stack.Screen
        name={'WatchHistoryScreen'}
        component={WatchHistoryScreen}
      />
      <Stack.Screen name={'WatchlistScreen'} component={WatchlistScreen} />
      <Stack.Screen
        name={'DetailMovieScreen'}
        component={DetailMovieScreen}
        options={{
          gestureDirection: 'vertical',
          gestureResponseDistance: windowHeight / 2,
          cardStyleInterpolator: ({current, layouts}: any) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
      <Stack.Screen name={'CastScreen'} component={CastScreen} />
    </Stack.Navigator>
  );
};
