import {UseQueryResult} from '@tanstack/react-query';

interface SplashScreenParams {}
interface OnboardingScreenParams {}
interface LoginScreenParams {}
interface SignUpScreenParams {}
interface ExploreScreenParams {}
interface HomeScreenParams {}
interface ProfileScreenParams {}
interface MoreMoviesScreenParams {
  title: string;
  query: UseQueryResult<IMovieList[], Error>;
}

type ParamList = {
  SplashScreen: SplashScreenParams;
  OnboardingScreen: OnboardingScreenParams;
  LoginScreen: LoginScreenParams;
  SignUpScreen: SignUpScreenParams;
  BottomTabNavigator: BottomTabNavigatorParams;
  ExploreScreen: ExploreScreenParams;
  HomeScreen: HomeScreenParams;
  ProfileScreen: ProfileScreenParams;
  MoreMoviesScreen: MoreMoviesScreenParams;
};
