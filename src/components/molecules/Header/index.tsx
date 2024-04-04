import Colors from '@constants/colors';
import {NavigationContext} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {styles} from './styles';

type Props = {
  withBackIcon?: boolean;
  label?: string;
};

const Header = ({withBackIcon = true, label}: Props) => {
  const navigation: any = React.useContext(NavigationContext);

  return (
    <SafeAreaView>
      <View style={styles.headerComponent}>
        {withBackIcon ? (
          <IconButton
            icon={'chevron-left'}
            iconColor={Colors.white}
            size={30}
            onPress={() => navigation.goBack()}
          />
        ) : null}

        {label ? (
          <Text style={styles.labelTxt}>Choose Your Interest</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export {Header};
