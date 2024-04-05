import Colors from '@constants/colors';
import {windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.base,
    alignItems: 'center',
  },
  imgContainer: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  title: {
    fontSize: 32,
    color: Colors.white,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.gray.gray500,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  formContainer: {
    margin: 16,
    gap: 24,
  },
  logInBtn: {
    color: Colors.primary.light1,
    fontWeight: '600',
  },
  signUpRow: {
    flexDirection: 'row',
    gap: 4,
    marginVertical: 12,
  },
  signUpBtn: {width: windowWidth - 32, paddingVertical: 14, marginBottom: 50},
});
