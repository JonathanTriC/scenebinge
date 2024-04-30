import {BottomSheet, RenderImage, Spacer} from '@components/atoms';
import Colors from '@constants/colors';
import {YT_THUMBNAIL} from '@constants/url';
import {windowHeight} from '@constants/utils';
import {BlurView} from '@react-native-community/blur';
import {GestureHandlerRefContext} from '@react-navigation/stack';
import {isEmpty} from 'lodash';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-paper';
import {DetailHeader} from './components';
import {DetailCard} from './components/DetailCard';
import {styles} from './styles';
import useDetailMovie from './useDetailMovie';

const DetailMovieScreen = () => {
  const {
    navigateScreen,
    popScreen,
    addWatchlist,
    removeWatchlist,
    detailData,
    scrollViewRef,
    onScroll,
    scrolledTop,
    setNewMovieID,
    setNewMovieTitle,
    isExist,
    docId,
    isClickPlay,
    setClickPlay,
    onClickWatch,
  } = useDetailMovie();

  return (
    <>
      <GestureHandlerRefContext.Consumer>
        {ref => (
          <ScrollView
            ref={scrollViewRef}
            waitFor={scrolledTop ? ref : undefined}
            onScroll={onScroll}
            scrollEventThrottle={10}
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}>
            <View>
              <RenderImage
                imageUrl={detailData?.poster_path}
                style={styles.posterImg}
              />
              <LinearGradient
                colors={[
                  Colors.transparent,
                  Colors.primary.base,
                  Colors.primary.base,
                ]}
                locations={[0, 0.85, 1]}
                style={[
                  styles.posterGradient,
                  {
                    ...StyleSheet.absoluteFillObject,
                  },
                ]}
              />
            </View>
            <DetailHeader
              onPressClose={() => popScreen()}
              onPressAdd={() => {
                const data: FirebaseAddWatchList = {
                  id: detailData?.id ?? 0,
                  title: detailData?.title ?? detailData?.name ?? '',
                  poster_path: detailData?.poster_path ?? '',
                };

                if (!isExist) {
                  addWatchlist(data);
                } else {
                  removeWatchlist(docId, data?.title);
                }
              }}
            />

            <View style={styles.playWrapper}>
              <BlurView
                blurType="light"
                blurRadius={25}
                blurAmount={20}
                style={[
                  styles.playBlur,
                  {
                    ...StyleSheet.absoluteFillObject,
                  },
                ]}
              />
              <TouchableOpacity onPress={() => setClickPlay(!isClickPlay)}>
                <Icon source={'play'} size={40} color="white" />
              </TouchableOpacity>
            </View>

            <DetailCard data={detailData} />

            <Spacer height={16} />
            <View style={{marginHorizontal: 16}}>
              <Text style={styles.headerTxt}>Cast</Text>
              <FlatList
                nestedScrollEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                data={detailData?.credits?.cast?.slice(0, 10)}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigateScreen<CastScreenParams>('CastScreen', {
                          castID: item?.id ?? 0,
                          name: item?.name ?? '',
                        })
                      }>
                      <RenderImage
                        imageUrl={item?.profile_path ?? ''}
                        style={{width: 80, height: 80, borderRadius: 40}}
                      />
                      <Text style={styles.txtCast} numberOfLines={2}>
                        {item?.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                ItemSeparatorComponent={() => <Spacer width={16} />}
              />
            </View>

            <Spacer height={8} />

            {!isEmpty(detailData?.similar?.results) ? (
              <View style={{marginHorizontal: 16}}>
                <Text style={styles.headerTxt}>Explore More</Text>
                <FlatList
                  nestedScrollEnabled
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={detailData?.similar?.results}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={async () => {
                          scrollViewRef.current?.scrollTo?.({
                            y: 0,
                            animated: false,
                          });
                          setNewMovieID(item?.id);
                          setNewMovieTitle(item?.title ?? item?.name ?? '');
                        }}>
                        <RenderImage
                          imageUrl={item?.poster_path}
                          style={{width: 100, height: 140, borderRadius: 10}}
                        />
                        <Text style={styles.txtSimilar} numberOfLines={2}>
                          {item?.title}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                  ItemSeparatorComponent={() => <Spacer width={16} />}
                />
              </View>
            ) : null}
            <Spacer height={50} />
          </ScrollView>
        )}
      </GestureHandlerRefContext.Consumer>

      <BottomSheet
        maxHeight={windowHeight / 2}
        visible={isClickPlay}
        onClose={() => setClickPlay(!isClickPlay)}>
        <View style={{marginHorizontal: 16}}>
          <FlatList
            data={detailData?.videos?.results?.reverse()}
            renderItem={({item}) => {
              return (
                <View>
                  <Text style={styles.headerTxt}>Start watching</Text>

                  <TouchableOpacity
                    onPress={() => {
                      onClickWatch(item);
                    }}>
                    <View style={styles.rowVideos}>
                      <FastImage
                        source={{
                          uri: YT_THUMBNAIL(item?.key ?? ''),
                        }}
                        style={styles.imgVideos}
                      />
                      <Text style={styles.txtVideos}>{item?.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            ListEmptyComponent={() => (
              <View>
                <View style={styles.emptyStateContainer}>
                  <Image
                    source={require('@assets/images/emptyState.png')}
                    style={styles.emptyImg}
                  />
                  <Text style={styles.title}>
                    {`Oopps! Sorry we have no content\nfor this movie!`}
                  </Text>
                  <Text style={styles.emptyStateTxt}>
                    {`Please enjoy our other movies while we try to updating our content.`}
                  </Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <Spacer height={10} />}
            ListFooterComponent={() => <Spacer height={50} />}
          />
        </View>
      </BottomSheet>
    </>
  );
};

export {DetailMovieScreen};
