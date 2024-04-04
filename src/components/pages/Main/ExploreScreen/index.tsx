import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

const ExploreScreen = () => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{paddingBottom: bottomTabBarHeight}}>
      <Text style={{color: 'white'}}>Explore Screen</Text>
    </View>
  );
};

export {ExploreScreen};
