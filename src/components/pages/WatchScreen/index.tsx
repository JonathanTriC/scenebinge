import {windowWidth} from '@constants/utils';
import {BlurView} from '@react-native-community/blur';
import {GestureHandlerRefContext} from '@react-navigation/stack';
import dayjs from 'dayjs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import {styles} from './styles';
import useWatch from './useWatch';

const WatchScreen = () => {
  const {popScreen, youtubeKey, name, videoData} = useWatch();
  return (
    <GestureHandlerRefContext.Consumer>
      {ref => (
        <View>
          <View style={styles.headerClose}>
            <View style={styles.headerRow}>
              <TouchableOpacity
                onPress={() => popScreen()}
                style={styles.closeBtn}>
                <BlurView
                  blurType="light"
                  blurRadius={25}
                  blurAmount={20}
                  style={[
                    styles.closeBtnBlur,
                    {
                      ...StyleSheet.absoluteFillObject,
                    },
                  ]}
                />
                <Icon source={'close'} size={25} color="white" />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerName} numberOfLines={1}>
                  {name}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.playerWrapper}>
            <YoutubePlayer
              height={225}
              width={windowWidth}
              videoId={youtubeKey}
            />
            <ScrollView style={styles.metaDataScrollView}>
              <View style={styles.metaDataWrapper}>
                <Text style={styles.metaDataTitle}>{videoData?.title}</Text>
                <Text style={styles.metaDataSubtitle}>
                  {videoData?.channelTitle}
                  {' • '}
                  {dayjs(videoData?.publishedAt).format('DD-MMM-YYYY')}
                </Text>
                <Text style={styles.metaDataDescription}>
                  {videoData?.description}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </GestureHandlerRefContext.Consumer>
  );
};

export {WatchScreen};
