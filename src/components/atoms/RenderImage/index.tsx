import {IMAGE_URL} from '@constants/url';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import FastImage from 'react-native-fast-image';

type RenderImageProps = {
  imageUrl?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle> | StyleProp<ViewStyle> | any;
};

const RenderImage = ({imageUrl, width, height, style}: RenderImageProps) => {
  return (
    <FastImage
      source={{
        uri: imageUrl
          ? `${IMAGE_URL}${imageUrl}`
          : `https://placehold.jp/${width}x${height}.png?text=Image%0AUnavailable`,
      }}
      style={style ? style : {width: width, height: height}}
    />
  );
};

export {RenderImage};
