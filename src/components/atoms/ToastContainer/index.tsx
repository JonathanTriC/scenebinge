import Colors from '@constants/colors';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {ToastConfigParams} from 'react-native-toast-message';
import {styles} from './styles';

const ToastContainer: FC<ToastConfigParams<any>> = props => {
  if (props?.isVisible) {
    return (
      <View
        style={[
          styles.toastContainer,
          {
            backgroundColor:
              props.type === 'error'
                ? Colors.danger.base
                : props.type === 'warning'
                ? Colors.warning.base
                : props.type === 'info'
                ? Colors.info.base
                : Colors.success.base,
            borderWidth: 1,
          },
        ]}>
        <View style={{flex: 12}}>
          <Text
            style={[
              styles.toastTitle,
              {
                color:
                  props.type === 'warning' || props.type === 'info'
                    ? Colors.primary.base
                    : Colors.white,
              },
            ]}>
            {props.text1}
          </Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export {ToastContainer};
