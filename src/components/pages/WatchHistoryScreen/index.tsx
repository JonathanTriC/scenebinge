import {Button, Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {IMAGE_URL} from '@constants/url';
import {isEmpty} from 'lodash';
import {useLayoutEffect} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icon} from 'react-native-paper';
import {styles} from './styles';
import useWatchHistory from './useWatchHistory';

const WatchHistoryScreen = () => {
  const {navigation, navigateScreen, watchHistoryData} = useWatchHistory();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label={'Watch History'} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      {!isEmpty(watchHistoryData) ? (
        <View>
          <Text style={styles.title}>Start Watch</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={watchHistoryData}
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
                    <FastImage
                      source={{uri: `${IMAGE_URL}${item?.poster_path}`}}
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
        <View>
          <Text style={styles.title}>Continue Watch</Text>
          <View style={styles.emptyStateContainer}>
            <Image
              source={require('@assets/images/emptyState.png')}
              style={styles.emptyImg}
            />
            <Text style={styles.title}>You haven't watched anything yet</Text>
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
        </View>
      )}
    </View>
  );
};

export {WatchHistoryScreen};
