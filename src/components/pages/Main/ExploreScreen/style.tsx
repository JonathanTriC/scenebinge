import Colors from '@constants/colors';
import {windowHeight, windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  heroImg: {
    width: windowWidth - 32,
    height: windowHeight * 0.65,
    objectFit: 'fill',
    borderRadius: 20,
  },
  heroInfoWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 20,
  },
  heroInfoContainer: {padding: 16, alignItems: 'center'},
  heroBlur: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderRadius: 20,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  heroTitle: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  heroSubtitle: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 4,
  },
  heroBtnRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 12,
  },
  heroBtnPlus: {
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 12,
    padding: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: Colors.primary.light1,
  },
});
