import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-paper';
import {styles} from './styles';
import useProfile from './useProfile';

const ProfileScreen = () => {
  const {userData, profileButtonList, logout} = useProfile();
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{paddingBottom: bottomTabBarHeight}}>
      <Header label="Profile" withBackIcon={false} />

      <View style={styles.profileContainer}>
        <Image
          source={require('@assets/images/avatar.png')}
          style={styles.imgAvatar}
        />
        <Text style={styles.fullNameTxt}>{userData?.full_name}</Text>
        <Text style={styles.emailTxt}>{userData?.email}</Text>
      </View>
      <FlatList
        data={profileButtonList}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={item.action}>
              <View style={styles.buttonContainer}>
                <Icon
                  source={item.icon}
                  size={28}
                  color={
                    item.icon !== 'logout' ? Colors.white : Colors.danger.base
                  }
                />
                <Text
                  style={[
                    styles.btnTxt,
                    {
                      color:
                        item.icon !== 'logout'
                          ? Colors.white
                          : Colors.danger.base,
                    },
                  ]}>
                  {item.title}
                </Text>
                {item.icon !== 'logout' ? (
                  <Icon
                    source={'chevron-right'}
                    size={28}
                    color={Colors.white}
                  />
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export {ProfileScreen};
