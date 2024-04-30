import Colors from '@constants/colors';
import {windowHeight, windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  posterImg: {
    width: windowWidth,
    height: windowHeight * 0.7,
  },
  posterGradient: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight * 0.7,
  },
  playWrapper: {
    position: 'absolute',
    padding: 8,
    top: windowHeight * 0.2,
    left: windowWidth * 0.44,
  },
  playBlur: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderRadius: 30,
  },
  headerTxt: {
    marginVertical: 12,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  txtCast: {
    color: Colors.white,
    fontSize: 12,
    paddingTop: 6,
    width: 80,
    textAlign: 'center',
  },
  txtSimilar: {
    color: Colors.white,
    fontSize: 12,
    paddingTop: 6,
    width: 100,
    textAlign: 'center',
  },
  rowVideos: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  imgVideos: {
    width: 100,
    height: 60,
    borderRadius: 6,
  },
  txtVideos: {
    flex: 1,
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  // empty
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    textAlign: 'center',
  },
  emptyStateContainer: {
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
