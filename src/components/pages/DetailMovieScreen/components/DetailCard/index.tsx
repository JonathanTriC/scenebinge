import {minutesToHHMM} from '@constants/utils';
import {BlurView} from '@react-native-community/blur';
import dayjs from 'dayjs';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';

type Props = {
  data: IMovieDetail | undefined;
};

const DetailCard = ({data}: Props) => {
  return (
    <View style={styles.cardWrapper}>
      <BlurView
        blurType="light"
        blurRadius={25}
        blurAmount={20}
        style={[
          styles.cardBlur,
          {
            ...StyleSheet.absoluteFillObject,
          },
        ]}
      />
      <View>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {data?.title ?? data?.name ?? '-'}
        </Text>

        <FlatList
          horizontal
          data={data?.genres?.splice(0, 2)}
          contentContainerStyle={styles.cardSubtitleRow}
          ListHeaderComponent={() => (
            <Text style={styles.cardSubtitle}>
              {dayjs(data?.release_date).year()}
            </Text>
          )}
          renderItem={({item}) => {
            return (
              <Text style={styles.cardSubtitle}> • {item?.name ?? '-'}</Text>
            );
          }}
        />
        {data?.runtime ? (
          <Text style={styles.cardSubtitle}>
            Runtime: {minutesToHHMM(data?.runtime ?? 0)}
          </Text>
        ) : null}

        {data?.number_of_seasons ? (
          <Text style={styles.cardSubtitle}>
            Total Season: {data?.number_of_seasons ?? 0} • Total Episode:{' '}
            {data?.number_of_episodes ?? 0}
          </Text>
        ) : null}

        <Text style={styles.cardHeaderSynopsis}>Synopsis:</Text>
        <Text style={styles.cardSynopsis} numberOfLines={5}>
          {data?.overview ?? '-'}
        </Text>
      </View>
    </View>
  );
};

export {DetailCard};
