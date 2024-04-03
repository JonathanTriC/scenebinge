/* eslint-disable react-native/no-inline-styles */
import Colors from '@constants/colors';
import {_handlerSetItem} from '@constants/functional';
import {Keys} from '@constants/keys';
import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import {styles} from './styles';

type Props = {
  navigation: any;
};

const slides = [
  {
    key: 'one',
    title: 'Welcome to SceneBinge!',
    text: 'The best streaming app of the century to make your days great!',
  },
  {
    key: 'two',
    title: 'Explore and Watch!',
    text: 'Watch unlimited movies and series in anytime and everywhere!',
  },
  {
    key: 'three',
    title: 'Stay Up-To-Date!',
    text: 'Access every latest releases, and keep a track to your favourites one!',
  },
];

const OnboardingScreen: FC<Props> = ({navigation}) => {
  const handleDone = async () => {
    await _handlerSetItem(Keys.onboarded, 'true');
    navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.primary.base}}>
      <Image
        source={require('@assets/images/onboard.png')}
        style={{position: 'absolute'}}
      />
      <TouchableOpacity style={styles.buttonSkip} onPress={handleDone}>
        <Text style={styles.textSkip}>Skip</Text>
      </TouchableOpacity>

      <LinearGradient
        colors={['#00071325', '#071325']}
        start={{x: 0, y: 0.2}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}>
        <AppIntroSlider
          data={slides}
          bottomButton={true}
          onDone={handleDone}
          dotStyle={{
            backgroundColor: Colors.primary.base,
          }}
          activeDotStyle={{
            backgroundColor: Colors.primary.light1,
          }}
          keyExtractor={item => item.key}
          renderNextButton={() => (
            <View style={styles.buttonNext}>
              <Text style={styles.textButton}>Next</Text>
            </View>
          )}
          renderDoneButton={() => (
            <View style={styles.buttonNext}>
              <Text style={styles.textButton}>Get Started</Text>
            </View>
          )}
          renderItem={({item}: any) => (
            <View style={styles.container}>
              <View style={styles.txtContainer}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textText}>{item.text}</Text>
              </View>
            </View>
          )}
        />
      </LinearGradient>
    </View>
  );
};

export {OnboardingScreen};
