import Colors from '@constants/colors';
import {windowWidth} from '@constants/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.base,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  title: {
    marginTop: 36,
    fontSize: 32,
    color: Colors.white,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: Colors.gray.gray500,
    fontWeight: '500',
  },
  formContainer: {
    margin: 16,
    gap: 12,
  },
  signUpBtn: {
    color: Colors.primary.light1,
    fontWeight: '600',
  },
  signUpRow: {
    flexDirection: 'row',
    gap: 4,
    marginVertical: 12,
  },
  loginBtnContainer: {position: 'absolute', bottom: 20},
  loginBtn: {width: windowWidth - 32, paddingVertical: 14, marginBottom: 20},
});
