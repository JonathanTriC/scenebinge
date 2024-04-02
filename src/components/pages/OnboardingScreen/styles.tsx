import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonSkip: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 15,
  },
  textSkip: {
    fontFamily: 'Poppins-Regular',
    color: Colors.white,
    letterSpacing: 0.25,
  },
  buttonNext: {
    backgroundColor: Colors.primary.light1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  textButton: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.25,
  },
  container: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  txtContainer: {
    bottom: 100,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
  },
  textText: {
    color: Colors.white,
    marginTop: 8,
    textAlign: 'center',
  },
});
