interface SplashScreenParams {}
interface OnboardingScreenParams {}
interface LoginScreenParams {}
interface SignUpScreenParams {}
interface ExploreScreenParams {}
interface HomeScreenParams {}
interface ProfileScreenParams {}
interface SearchScreenParams {}
interface WatchHistoryScreenParams {}
interface WatchlistScreenParams {}
interface MoreMoviesScreenParams {
  title: string;
  url_path: string;
}
interface DetailMovieScreenParams {
  movieID: number;
  title: string;
}

interface CastScreenParams {
  castID: number;
  name: string;
}

interface WatchScreenParams {
  youtubeKey: string;
  name: string;
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
  SearchScreen: SearchScreenParams;
  WatchHistoryScreen: WatchHistoryScreenParams;
  WatchlistScreen: WatchlistScreenParams;
  DetailMovieScreen: DetailMovieScreenParams;
  CastScreen: CastScreenParams;
  WatchScreen: WatchScreenParams;
};
