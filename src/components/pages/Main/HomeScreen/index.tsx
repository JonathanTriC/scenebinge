import {Spacer} from '@components/atoms';
import Colors from '@constants/colors';
import {_handlerCapitalizeEachWord} from '@constants/functional';
import {ScrollView, Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {MoreMoviesScreenParams} from 'type/screen';
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
          onPress={() => {}}
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
              query: popularMovieQueries,
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
              query: actionMovieQueries,
            });
          }}
        />
        <ListItems
          title="Scream Fest: Top Picks for Horror Enthusiasts"
          data={horrorMovieQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: 'Scream Fest: Top Picks for Horror Enthusiasts',
              query: horrorMovieQueries,
            });
          }}
        />
        <ListItems
          title="Love's Embrace: Romantic Films to Ignite Your Soul"
          data={romanceMovieQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: "Love's Embrace: Romantic Films to Ignite Your Soul",
              query: romanceMovieQueries,
            });
          }}
        />
        <ListItems
          title="K-Drama Fever: Top Picks for Fans of Korean Dramas"
          data={koreanDramaQueries?.data ?? []}
          onSeeMore={() => {
            navigateScreen<MoreMoviesScreenParams>('MoreMoviesScreen', {
              title: 'K-Drama Fever: Top Picks for Fans of Korean Dramas',
              query: koreanDramaQueries,
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
              query: koreanActionQueries,
            });
          }}
        />

        <Spacer height={150} />
      </ScrollView>
    </View>
  );
};

export {HomeScreen};
