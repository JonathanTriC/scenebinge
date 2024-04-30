import Colors from '@constants/colors';
import {windowHeight, windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardWrapper: {
    position: 'absolute',
    width: windowWidth - 32,
    marginHorizontal: 16,
    padding: 16,
    top: windowHeight * 0.46,
    overflow: 'hidden',
    borderRadius: 14,
  },
  cardBlur: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderRadius: 14,
  },
  cardTitle: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  cardSubtitle: {
    color: Colors.white,
    fontSize: 12,
    paddingTop: 4,
    textAlign: 'center',
  },
  cardSubtitleRow: {
    width: '100%',
    justifyContent: 'center',
  },
  cardHeaderSynopsis: {
    marginTop: 12,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  cardSynopsis: {
    color: Colors.white,
    fontSize: 12,
    paddingTop: 4,
  },
});
