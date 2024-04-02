/* eslint-disable react-hooks/exhaustive-deps */
import Colors from '@constants/colors';
import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSplashScreen} from './useSplashScreen';

type Props = {
  navigation: any;
};

const SplashScreen: FC<Props> = ({navigation}) => {
  const {} = useSplashScreen(navigation);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('@assets/images/splash.png')}
          style={{width: 320, height: 252}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.base,
  },
});

export {SplashScreen};
