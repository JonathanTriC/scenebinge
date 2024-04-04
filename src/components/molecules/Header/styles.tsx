import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerComponent: {
    backgroundColor: Colors.primary.base,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelTxt: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});
