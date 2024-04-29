import {Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import {IMAGE_URL} from '@constants/url';
import {useLayoutEffect} from 'react';
import {FlatList, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import useCast from './useCast';

const CastScreen = () => {
  const {navigation, navigateScreen, name, detailCastData} = useCast();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label={name ?? ''} />,
    });
  }, []);

  return (
    <View style={{margin: 16}}>
      <FlatList
        data={detailCastData?.cast?.reverse()}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListFooterComponent={() => <Spacer height={50} />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigateScreen<DetailMovieScreenParams>('DetailMovieScreen', {
                  movieID: item?.id ?? 0,
                  title: item?.title ?? item?.name ?? '',
                });
              }}>
              <FastImage
                source={{
                  uri: item?.poster_path
                    ? `${IMAGE_URL}${item?.poster_path}`
                    : `https://placehold.jp/110x150.png?text=Image%0AUnavailable`,
                }}
                style={styles.img}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export {CastScreen};
