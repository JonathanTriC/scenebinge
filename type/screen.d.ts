interface SplashScreenParams {}
interface OnboardingScreenParams {}
interface LoginScreenParams {}
interface SignUpScreenParams {}
interface ExploreScreenParams {}
interface HomeScreenParams {}
interface ProfileScreenParams {}

type ParamList = {
  SplashScreen: SplashScreenParams;
  OnboardingScreen: OnboardingScreenParams;
  LoginScreen: LoginScreenParams;
  SignUpScreen: SignUpScreenParams;
  BottomTabNavigator: BottomTabNavigatorParams;
  ExploreScreen: ExploreScreenParams;
  HomeScreen: HomeScreenParams;
  ProfileScreen: ProfileScreenParams;
};
