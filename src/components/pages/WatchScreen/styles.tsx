import Colors from '@constants/colors';
import {windowHeight, windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerRow: {flexDirection: 'row', alignItems: 'center'},
  headerClose: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  headerName: {
    marginLeft: 12,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
    width: windowWidth - 90,
  },
  closeBtn: {padding: 4, overflow: 'hidden'},
  closeBtnBlur: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  playerWrapper: {
    marginTop: 60,
  },
  moreContainer: {
    marginHorizontal: 16,
  },
  moreTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  metaDataScrollView: {marginBottom: windowHeight - 360},
  metaDataWrapper: {margin: 16, gap: 4},
  metaDataTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  metaDataSubtitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  metaDataDescription: {
    color: Colors.white,
  },
});
