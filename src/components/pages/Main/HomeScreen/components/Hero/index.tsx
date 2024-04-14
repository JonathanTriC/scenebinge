import {Button} from '@components/atoms';
import Colors from '@constants/colors';
import {parseGenreName} from '@constants/functional';
import {IMAGE_URL} from '@constants/url';
import {BlurView} from '@react-native-community/blur';
import {useFirebaseAddWatchList} from '@services/firebase';
import dayjs from 'dayjs';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icon} from 'react-native-paper';
import {styles} from './style';

type HeroProps = {
  data: IMovieList[];
};

const Hero = ({data}: HeroProps) => {
  const {mutate: addWatchlist} = useFirebaseAddWatchList();
  return (
    <FlatList
      nestedScrollEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      snapToAlignment="center"
      data={data}
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
                  {item?.title}
                </Text>
                <Text style={styles.heroSubtitle}>
                  {dayjs(item?.release_date).year()}
                  {parseGenreName(item.genre_ids ?? [])}
                </Text>

                <View style={styles.heroBtnRow}>
                  <Button
                    action={() => {}}
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
  );
};

export {Hero};
