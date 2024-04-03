import {_handlerCapitalizeEachWord} from '@constants/functional';
import {Text, TouchableOpacity, View} from 'react-native';
import useHome from './useHome';

const HomeScreen = () => {
  const {userData, logout} = useHome();
  return (
    <View>
      <Text style={{color: 'white'}}>Home Screen</Text>
      <Text style={{color: 'white'}}>
        {_handlerCapitalizeEachWord(userData?.full_name) ?? '-'}
      </Text>
      <TouchableOpacity style={{margin: 16}} onPress={logout}>
        <Text style={{color: 'white'}}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export {HomeScreen};
