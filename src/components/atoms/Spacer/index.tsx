import {FC} from 'react';
import {View} from 'react-native';

export type SpacerProps = {
  height?: number;
  width?: number;
};

const Spacer: FC<SpacerProps> = ({height, width}) => {
  return <View style={{height, width}} />;
};

export {Spacer};
