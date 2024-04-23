import {Button} from '@components/atoms';
import {Header} from '@components/molecules';
import Colors from '@constants/colors';
import {useLayoutEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import useWatchlist from './useWatchlist';

const WatchlistScreen = () => {
  const {navigation, navigateScreen} = useWatchlist();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header label={'Watchlist'} />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Watch</Text>

      <View style={styles.emptyStateContainer}>
        <Image
          source={require('@assets/images/emptyState.png')}
          style={styles.emptyImg}
        />
        <Text style={styles.title}>You haven't added a watch list yet</Text>
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
  );
};

export {WatchlistScreen};
