import {_handlerCapitalizeEachWord} from '@constants/functional';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import useHome from './useHome';

const HomeScreen = () => {
  const {userData} = useHome();
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{paddingBottom: bottomTabBarHeight}}>
      <Text style={{color: 'white'}}>Home Screen</Text>
      <Text style={{color: 'white'}}>
        {_handlerCapitalizeEachWord(userData?.full_name) ?? '-'}
      </Text>
    </View>
  );
};

export {HomeScreen};
