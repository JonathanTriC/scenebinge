import Colors from '@constants/colors';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Navigator} from './components';
import {styles} from './styles';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.primary.base,
  },
};

export const RouteApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary.base}
      />

      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer theme={MyTheme}>
          <Navigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
