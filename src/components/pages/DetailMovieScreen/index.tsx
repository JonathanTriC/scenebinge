import {Spacer} from '@components/atoms';
import Colors from '@constants/colors';
import {IMAGE_URL} from '@constants/url';
import {BlurView} from '@react-native-community/blur';
import {GestureHandlerRefContext} from '@react-navigation/stack';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  } = useDetailMovie();

  return (
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
            <FastImage
              source={{uri: `${IMAGE_URL}${detailData?.poster_path}`}}
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
            <TouchableOpacity>
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
                  <TouchableOpacity>
                    <FastImage
                      source={{uri: `${IMAGE_URL}${item?.profile_path}`}}
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
                    <FastImage
                      source={{uri: `${IMAGE_URL}${item?.poster_path}`}}
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

          <Spacer height={50} />
        </ScrollView>
      )}
    </GestureHandlerRefContext.Consumer>
  );
};

export {DetailMovieScreen};
