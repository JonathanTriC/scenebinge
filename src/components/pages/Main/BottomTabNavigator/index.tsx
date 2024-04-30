import Colors from '@constants/colors';
import {BlurView} from '@react-native-community/blur';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import {ExploreScreen} from '../ExploreScreen';
import {HomeScreen} from '../HomeScreen';
import {ProfileScreen} from '../ProfileScreen';
import {styles} from './styles';

const Tab = createBottomTabNavigator();
const IcExploreActive = require('@assets/icons/ic-explore-active.png');
const IcExplore = require('@assets/icons/ic-explore.png');
const IcHomeActive = require('@assets/icons/ic-home-active.png');
const IcHome = require('@assets/icons/ic-home.png');
const IcProfileActive = require('@assets/icons/ic-profile-active.png');
const IcProfile = require('@assets/icons/ic-profile.png');

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.white,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          overflow: 'hidden',
        },

        tabBarBackground: () => (
          <BlurView
            blurType="dark"
            blurRadius={25}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              backgroundColor: 'rgba(7, 19, 37, 0.4)',
            }}
          />
        ),
      }}>
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelContainer}>
                <Image source={IcExploreActive} style={styles.icon} />
                <View
                  style={[
                    styles.dotContainer,
                    {backgroundColor: Colors.primary.light1},
                  ]}
                />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Image source={IcExplore} style={styles.icon} />

                <View style={styles.dotContainer} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelContainer}>
                <Image source={IcHomeActive} style={styles.icon} />
                <View
                  style={[
                    styles.dotContainer,
                    {backgroundColor: Colors.primary.light1},
                  ]}
                />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Image source={IcHome} style={styles.icon} />
                <View style={styles.dotContainer} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.labelContainer}>
                <Image source={IcProfileActive} style={styles.icon} />
                <View
                  style={[
                    styles.dotContainer,
                    {backgroundColor: Colors.primary.light1},
                  ]}
                />
              </View>
            ) : (
              <View style={styles.labelContainer}>
                <Image source={IcProfile} style={styles.icon} />
                <View style={styles.dotContainer} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};
