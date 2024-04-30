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
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemImg: {
    height: 80,
    width: 60,
    borderRadius: 10,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  itemTxt: {
    flex: 1,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  deleteContainer: {
    backgroundColor: Colors.danger.base,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
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
