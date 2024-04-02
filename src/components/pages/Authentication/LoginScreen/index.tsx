import {Button, TextField} from '@components/atoms';
import Colors from '@constants/colors';
import {Controller} from 'react-hook-form';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './style';
import useLogin from './useLogin';

const LoginScreen = () => {
  const {navigateScreen, control, handleSubmit} = useLogin();
  const onSubmit = (data: any) => {
    console.log('Successful', JSON.stringify(data));
  };
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: Colors.primary.base}}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Login to access your favorite movies and series
        </Text>
        <Image
          source={require('@assets/images/login.png')}
          style={styles.imgContainer}
        />
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name={'email'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Email"
                backgroundColor={Colors.dark.dark2}
                placeholderTextColor={Colors.gray.gray500}
                leftIcon={'email'}
                leftIconColor={Colors.gray.gray500}
                keyboardType="email-address"
                errorMessage={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name={'password'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Password"
                backgroundColor={Colors.dark.dark2}
                placeholderTextColor={Colors.gray.gray500}
                leftIcon={'lock'}
                leftIconColor={Colors.gray.gray500}
                iconColor={Colors.gray.gray500}
                secure
                errorMessage={error?.message}
              />
            )}
          />

          <View style={styles.signUpRow}>
            <Text style={{color: Colors.white}}>Didn’t have account?</Text>
            <TouchableOpacity onPress={() => navigateScreen('SignUpScreen')}>
              <Text style={styles.signUpBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginBtnContainer}>
          <Button
            label="Sign In"
            background={Colors.primary.light1}
            fontSize={16}
            style={styles.loginBtn}
            action={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export {LoginScreen};
