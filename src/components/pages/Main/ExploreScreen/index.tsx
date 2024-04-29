import {Button, Spacer} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {parseGenreName} from '@constants/functional';
import {IMAGE_URL} from '@constants/url';
import {windowWidth} from '@constants/utils';
import {BlurView} from '@react-native-community/blur';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useFirebaseAddWatchList} from '@services/firebase';
import dayjs from 'dayjs';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icon} from 'react-native-paper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './style';
import useExplore from './useExplore';

const ExploreScreen = () => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  const {navigateScreen, filterList, index, setIndex, filter, setFilter} =
    useExplore();
  const {mutate: addWatchlist} = useFirebaseAddWatchList();

  return (
    <View style={{paddingBottom: bottomTabBarHeight}}>
      <Header label="Explore" withBackIcon={false} />
      <View style={{margin: 16}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filterList}
          style={{marginBottom: 12}}
          ItemSeparatorComponent={() => <Spacer width={8} />}
          renderItem={({item}) => {
            return (
              <Button
                action={() => {
                  setFilter({
                    title: item.title,
                    data: item?.data ?? [],
                  });
                }}
                label={item.title}
                outline={filter.title !== item.title}
                background={Colors.white}
                color={Colors.primary.base}
                padding={10}
              />
            );
          }}
        />

        <Carousel
          loop
          layout={'tinder'}
          sliderWidth={windowWidth - 32}
          itemWidth={windowWidth - 32}
          data={filter?.data ?? []}
          onSnapToItem={index => setIndex(index)}
          renderItem={({item}) => {
            return (
              <View>
                <FastImage
                  source={{uri: `${IMAGE_URL}${item?.poster_path}`}}
                  style={styles.heroImg}
                />

                <View style={styles.heroInfoWrapper}>
                  <BlurView
                    blurType="light"
                    blurRadius={25}
                    blurAmount={20}
                    style={[
                      styles.heroBlur,
                      {
                        ...StyleSheet.absoluteFillObject,
                      },
                    ]}
                  />
                  <View style={styles.heroInfoContainer}>
                    <Text style={styles.heroTitle} numberOfLines={2}>
                      {item?.title ?? item?.name}
                    </Text>
                    <Text style={styles.heroSubtitle}>
                      {dayjs(item?.release_date).year()}
                      {parseGenreName(item.genre_ids ?? [])}
                    </Text>

                    <View style={styles.heroBtnRow}>
                      <Button
                        action={() => {
                          navigateScreen<DetailMovieScreenParams>(
                            'DetailMovieScreen',
                            {
                              movieID: item?.id ?? 0,
                              title: item?.title ?? item?.name ?? '',
                            },
                          );
                        }}
                        label="Watch Now"
                        iconLeft={<Icon source={'play'} size={18} />}
                        background={Colors.white}
                        color={Colors.primary.base}
                        padding={14}
                      />
                      <TouchableOpacity
                        style={styles.heroBtnPlus}
                        onPress={() => {
                          const data: FirebaseAddWatchList = {
                            id: item?.id ?? 0,
                            title: item?.title ?? item?.name ?? '',
                            poster_path: item?.poster_path ?? '',
                          };
                          addWatchlist(data);
                        }}>
                        <Icon source={'plus'} size={20} color={Colors.white} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <Pagination
          dotsLength={filter?.data?.length ?? 0}
          activeDotIndex={index}
          dotStyle={styles.dot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export {ExploreScreen};
