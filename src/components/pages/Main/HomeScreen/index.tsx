import {Spacer} from '@components/atoms';
import Colors from '@constants/colors';
import {_handlerCapitalizeEachWord} from '@constants/functional';
import {URL_PATH} from '@constants/url';
import {ScrollView, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Hero, ListItems} from './components';
import {styles} from './styles';
import useHome from './useHome';

const HomeScreen = () => {
  const {
    navigateScreen,
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
          onPress={() => {
            navigateScreen('SearchScreen');
          }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Hero data={nowPlayingQueries?.data ?? []} />

        <ListItems
          title="Curated Picks for Your Weekend Binge"
          data={popularMovieQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: 'Curated Picks for Your Weekend Binge',
              url_path: `${URL_PATH.movieNowPlaying()}`,
            });
          }}
        />
        <ListItems
          title="Adrenaline Rush: Top Picks for Action Lovers
          "
          data={actionMovieQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: 'Adrenaline Rush: Top Picks for Action Lovers',
              url_path: `${URL_PATH.movieDiscover(
                'revenue',
                'with_genres=28,12',
              )}`,
            });
          }}
        />
        <ListItems
          title="Scream Fest: Top Picks for Horror Enthusiasts"
          data={horrorMovieQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: 'Scream Fest: Top Picks for Horror Enthusiasts',
              url_path: `${URL_PATH.movieDiscover(
                'revenue',
                'with_genres=27,53',
              )}`,
            });
          }}
        />
        <ListItems
          title="Love's Embrace: Romantic Films to Ignite Your Soul"
          data={romanceMovieQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: "Love's Embrace: Romantic Films to Ignite Your Soul",
              url_path: `${URL_PATH.movieDiscover(
                'popularity',
                'with_genres=10749,35',
              )}`,
            });
          }}
        />
        <ListItems
          title="K-Drama Fever: Top Picks for Fans of Korean Dramas"
          data={koreanDramaQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: 'K-Drama Fever: Top Picks for Fans of Korean Dramas',
              url_path: `${URL_PATH.koreanDramaDiscover(18)}`,
            });
          }}
        />
        <ListItems
          title="Escapism at Its Best: Action K-Dramas for an Epic Night In"
          data={koreanActionQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title:
                'Escapism at Its Best: Action K-Dramas for an Epic Night In',
              url_path: `${URL_PATH.koreanDramaDiscover(10759)}`,
            });
          }}
        />

        <Spacer height={150} />
      </ScrollView>
    </View>
  );
};

export {HomeScreen};
