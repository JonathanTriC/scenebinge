import {Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import {IMAGE_URL} from '@constants/url';
import {useLayoutEffect} from 'react';
import {FlatList, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import useHome from '../Main/HomeScreen/useHome';
import {styles} from './styles';
import useMoreMovies from './useMoreMovies';

const MoreMoviesScreen = () => {
  const {navigation, title, query} = useMoreMovies();
  const {page, setPage} = useHome();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label={title} />,
    });
  }, []);

  return (
    <View style={{margin: 16}}>
      <FlatList
        data={query.data}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        onEndReached={() => {
          setPage(prevState => prevState + 1);
        }}
        onEndReachedThreshold={0.3}
        ListFooterComponent={() => <Spacer height={50} />}
        renderItem={({item}) => {
          return (
            <FastImage
              source={{uri: `${IMAGE_URL}${item?.poster_path}`}}
              style={styles.img}
            />
          );
        }}
      />
    </View>
  );
};

export {MoreMoviesScreen};
