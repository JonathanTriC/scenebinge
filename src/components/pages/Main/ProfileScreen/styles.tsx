import Colors from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 20,
    padding: 16,
    alignItems: 'center',
  },
  imgAvatar: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  fullNameTxt: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 24,
  },
  emailTxt: {
    color: Colors.white,
  },
  buttonContainer: {
    marginHorizontal: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnTxt: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    // backgroundColor: 'red',
  },
});
