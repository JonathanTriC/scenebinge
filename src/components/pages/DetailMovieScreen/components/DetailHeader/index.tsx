import {BlurView} from '@react-native-community/blur';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-paper';
import {styles} from './styles';

type Props = {
  onPressClose: () => void;
  onPressAdd: () => void;
};
const DetailHeader = ({onPressClose, onPressAdd}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressClose} style={styles.closeBtn}>
        <BlurView
          blurType="light"
          blurRadius={25}
          blurAmount={20}
          style={[
            styles.closeBtnBlur,
            {
              ...StyleSheet.absoluteFillObject,
            },
          ]}
        />
        <Icon source={'close'} size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressAdd} style={styles.closeBtn}>
        <BlurView
          blurType="light"
          blurRadius={25}
          blurAmount={20}
          style={[
            styles.closeBtnBlur,
            {
              ...StyleSheet.absoluteFillObject,
            },
          ]}
        />
        <Icon source={'plus'} size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export {DetailHeader};
