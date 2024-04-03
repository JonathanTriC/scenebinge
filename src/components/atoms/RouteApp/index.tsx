import Colors from '@constants/colors';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {ToastContainer} from '../ToastContainer';
import {Navigator} from './components';
import {styles} from './styles';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.primary.base,
  },
};

export const toastConfig = {
  success: (props: any) => <ToastContainer {...props} />,
  error: (props: any) => <ToastContainer {...props} type="error" />,
  warning: (props: any) => <ToastContainer {...props} type="warning" />,
};

const queryClient = new QueryClient();

export const RouteApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.primary.base}
        />

        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer theme={MyTheme}>
            <Navigator />

            <Toast
              config={toastConfig}
              position={'bottom'}
              visibilityTime={3000}
            />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
    </QueryClientProvider>
  );
};
