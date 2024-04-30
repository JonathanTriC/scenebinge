import {RenderImage, Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import {useLayoutEffect} from 'react';
import {FlatList, View} from 'react-native';
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
              <RenderImage
                imageUrl={item?.poster_path}
                width={110}
                height={150}
                style={styles?.img}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export {CastScreen};
