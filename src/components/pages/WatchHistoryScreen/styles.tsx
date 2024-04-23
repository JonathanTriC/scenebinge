import Colors from '@constants/colors';
import {windowHeight} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  emptyStateContainer: {
    height: windowHeight - 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateTxt: {
    textAlign: 'center',
    color: Colors.white,
  },
  emptyImg: {
    height: 150,
    width: 150,
  },
  emptyCTA: {
    marginTop: 12,
  },
});
