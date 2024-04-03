interface SplashScreenParams {}
interface OnboardingScreenParams {}
interface LoginScreenParams {}
interface SignUpScreenParams {}
interface HomeScreenParams {}

type ParamList = {
  SplashScreen: SplashScreenParams;
  OnboardingScreen: OnboardingScreenParams;
  LoginScreen: LoginScreenParams;
  SignUpScreen: SignUpScreenParams;
  HomeScreen: HomeScreenParams;
};
