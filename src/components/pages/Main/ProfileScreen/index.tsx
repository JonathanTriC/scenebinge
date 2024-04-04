import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import useProfile from './useProfile';

const ProfileScreen = () => {
  const {logout} = useProfile();
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{paddingBottom: bottomTabBarHeight}}>
      <Text style={{color: 'white'}}>Profile Screen</Text>
      <TouchableOpacity style={{margin: 16}} onPress={logout}>
        <Text style={{color: 'white'}}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export {ProfileScreen};
