import {windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: windowWidth - 32,
    position: 'absolute',
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'space-between',
  },
  closeBtn: {padding: 4, overflow: 'hidden'},
  closeBtnBlur: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
});
