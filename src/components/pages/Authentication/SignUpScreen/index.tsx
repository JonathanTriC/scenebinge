import {Button, Header, TextField} from '@components/atoms';
import Colors from '@constants/colors';
import {useLayoutEffect} from 'react';
import {Controller} from 'react-hook-form';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './style';
import useSignUp from './useSignUp';

const SignUpScreen = () => {
  const {navigation, popScreen, control, handleSubmit} = useSignUp();

  const onSubmit = (data: any) => {
    console.log('Successful', JSON.stringify(data));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header />,
    });
  }, []);

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: Colors.primary.base}}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>
          Join our movie streaming and get access to your favorite movies and
          series!
        </Text>
        <Image
          source={require('@assets/images/login.png')}
          style={styles.imgContainer}
        />
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name={'full_name'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Full Name"
                backgroundColor={Colors.dark.dark2}
                placeholderTextColor={Colors.gray.gray500}
                leftIcon={'account'}
                leftIconColor={Colors.gray.gray500}
                errorMessage={error?.message}
              />
            )}
          />

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

          <Controller
            control={control}
            name={'confirm_password'}
            render={({
              field: {value, onChange, onBlur},
              fieldState: {error},
            }) => (
              <TextField
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Confirm Password"
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
            <Text style={{color: Colors.white}}>Already have an account?</Text>
            <TouchableOpacity onPress={() => popScreen()}>
              <Text style={styles.logInBtn}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Button
            label="Sign Up"
            background={Colors.primary.light1}
            fontSize={16}
            style={styles.signUpBtn}
            action={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export {SignUpScreen};
