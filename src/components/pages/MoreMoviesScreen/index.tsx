import {RenderImage, Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import {useLayoutEffect} from 'react';
import {FlatList, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import useMoreMovies from './useMoreMovies';

const MoreMoviesScreen = () => {
  const {
    navigation,
    navigateScreen,
    title,
    data,
    flattenData,
    loadNextPageData,
  } = useMoreMovies();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label={title} />,
    });
  }, []);

  return (
    <View style={{margin: 16}}>
      <FlatList
        data={flattenData}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        onEndReached={loadNextPageData}
        onEndReachedThreshold={0.3}
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
              <RenderImage imageUrl={item?.poster_path} style={styles.img} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export {MoreMoviesScreen};
