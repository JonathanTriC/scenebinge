import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

// const bottomTabBarHeight = useBottomTabBarHeight();
export const styles = StyleSheet.create({
  container: {marginHorizontal: 16},
  homeHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeHeaderTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});
