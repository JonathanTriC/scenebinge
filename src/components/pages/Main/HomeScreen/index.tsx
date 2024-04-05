import {Spacer} from '@components/atoms';
import Colors from '@constants/colors';
import {_handlerCapitalizeEachWord} from '@constants/functional';
import {ScrollView, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Hero, ListItems} from './components';
import {styles} from './styles';
import useHome from './useHome';

const HomeScreen = () => {
  const {
    userData,
    nowPlayingQueries,
    popularMovieQueries,
    actionMovieQueries,
    horrorMovieQueries,
    romanceMovieQueries,
    koreanDramaQueries,
    koreanActionQueries,
  } = useHome();

  return (
    <View style={styles.container}>
      <View style={styles.homeHeaderContainer}>
        <Text style={styles.homeHeaderTitle}>
          For {_handlerCapitalizeEachWord(userData?.full_name, 'You')}
        </Text>

        <IconButton
          icon={'magnify'}
          iconColor={Colors.white}
          onPress={() => {}}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Hero data={nowPlayingQueries?.data ?? []} />

        <ListItems
          title="Curated Picks for Your Weekend Binge"
          data={popularMovieQueries?.data ?? []}
        />
        <ListItems
          title="Adrenaline Rush: Top Picks for Action Lovers
          "
          data={actionMovieQueries?.data ?? []}
        />
        <ListItems
          title="Scream Fest: Top Picks for Horror Enthusiasts"
          data={horrorMovieQueries?.data ?? []}
        />
        <ListItems
          title="Love's Embrace: Romantic Films to Ignite Your Soul"
          data={romanceMovieQueries?.data ?? []}
        />
        <ListItems
          title="K-Drama Fever: Top Picks for Fans of Korean Dramas"
          data={koreanDramaQueries?.data ?? []}
        />
        <ListItems
          title="Escapism at Its Best: Action K-Dramas for an Epic Night In"
          data={koreanActionQueries?.data ?? []}
        />

        <Spacer height={150} />
      </ScrollView>
    </View>
  );
};

export {HomeScreen};
