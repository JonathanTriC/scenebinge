import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  titleTrending: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  nameTxt: {
    flex: 1,
    color: Colors.white,
  },
  rowTxt: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: Colors.dark.disabled,
  },
  img: {
    height: 80,
    width: 60,
    borderRadius: 10,
    marginHorizontal: 4,
    marginVertical: 8,
  },
});
