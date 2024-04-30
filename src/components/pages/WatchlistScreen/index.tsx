import {Button, RenderImage, Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {isEmpty} from 'lodash';
import {useLayoutEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-paper';
import {styles} from './styles';
import useWatchlist from './useWatchlist';

const WatchlistScreen = () => {
  const {navigation, navigateScreen, watchlistData} = useWatchlist();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label={'Watchlist'} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      {!isEmpty(watchlistData) ? (
        <View>
          <Text style={styles.title}>Start Watch</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={watchlistData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigateScreen<DetailMovieScreenParams>(
                      'DetailMovieScreen',
                      {
                        movieID: item?.id ?? 0,
                        title: item?.title ?? item?.name ?? '',
                      },
                    );
                  }}>
                  <View style={styles.itemRow}>
                    <RenderImage
                      imageUrl={item?.poster_path}
                      style={styles.itemImg}
                    />

                    <Text style={styles.itemTxt}>{item?.title}</Text>
                    <Icon
                      source={'chevron-right'}
                      size={30}
                      color={Colors.white}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
            ListFooterComponent={() => <Spacer height={150} />}
          />
        </View>
      ) : (
        <View style={styles.emptyStateContainer}>
          <Image
            source={require('@assets/images/emptyState.png')}
            style={styles.emptyImg}
          />
          <Text style={styles.title}>You haven't added a watch list yet</Text>
          <Text style={styles.emptyStateTxt}>
            {`Start exploring and watch your favorite\nfilm or TV series`}
          </Text>
          <Button
            action={() => navigateScreen('SearchScreen')}
            label="Start Explore"
            padding={16}
            background={Colors.white}
            color={Colors.primary.base}
            style={styles.emptyCTA}
          />
        </View>
      )}
    </View>
  );
};

export {WatchlistScreen};
