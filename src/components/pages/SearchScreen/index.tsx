import {Spacer, TextField} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {IMAGE_URL} from '@constants/url';
import {isEmpty} from 'lodash';
import {useLayoutEffect} from 'react';
import {Controller} from 'react-hook-form';
import {FlatList, Image, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-paper';
import {styles} from './styles';
import useSearch from './useSearch';

const SearchScreen = () => {
  const {
    navigation,
    navigateScreen,
    control,
    trendingSearchData,
    searchTxt,
    searchQueryData,
  } = useSearch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label={'Search'} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Controller
          control={control}
          name={'search'}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <TextField
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Enter keywords to search..."
              backgroundColor={Colors.dark.dark2}
              placeholderTextColor={Colors.gray.gray500}
              rightIcon={'magnify'}
              iconColor={Colors.white}
            />
          )}
        />
      </View>
      {isEmpty(searchTxt) ? (
        <View>
          <Text style={styles.titleTrending}>Trending Searches</Text>
          <FlatList
            nestedScrollEnabled
            data={trendingSearchData?.slice(0, 10)}
            ListHeaderComponent={() => <View style={styles.border} />}
            ItemSeparatorComponent={() => <View style={styles.border} />}
            ListFooterComponent={() => <View style={styles.border} />}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigateScreen<DetailMovieScreenParams>('DetailMovieScreen', {
                    movieID: item?.id ?? 0,
                    title: item?.title ?? item?.name ?? '',
                  });
                }}>
                <View style={[styles.rowTxt, {paddingVertical: 6}]}>
                  <Icon source={'trending-up'} size={22} color={Colors.white} />
                  <Text style={styles.nameTxt}>
                    {item?.title ?? item?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : !isEmpty(searchQueryData) ? (
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchQueryData?.slice(0, 10)}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigateScreen<DetailMovieScreenParams>('DetailMovieScreen', {
                    movieID: item?.id ?? 0,
                    title: item?.title ?? item?.name ?? '',
                  });
                }}>
                <View style={styles.rowTxt}>
                  <FastImage
                    source={{
                      uri: item?.poster_path
                        ? `${IMAGE_URL}${item?.poster_path}`
                        : `https://placehold.jp/60x80.png?text=Image%0AUnavailable`,
                    }}
                    style={styles.img}
                  />
                  <Text style={styles.nameTxt}>
                    {item?.title ?? item?.name}
                  </Text>
                  <Icon
                    source={'chevron-right'}
                    size={28}
                    color={Colors.white}
                  />
                </View>
              </TouchableOpacity>
            )}
            ListFooterComponent={() => <Spacer height={150} />}
          />
        </View>
      ) : (
        <View style={styles.emptyStateContainer}>
          <Image
            source={require('@assets/images/emptySearch.png')}
            style={styles.emptyImg}
          />
          <Text style={styles.titleTrending}>
            Couldn't find "{searchTxt ?? ''}"
          </Text>
          <Text style={styles.emptyStateTxt}>
            {`Try to check your spelling or search\nwith other keywords.`}
          </Text>
        </View>
      )}
    </View>
  );
};

export {SearchScreen};
