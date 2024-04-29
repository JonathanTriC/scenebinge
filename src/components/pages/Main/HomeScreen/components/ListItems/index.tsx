import {Spacer} from '@components/atoms';
import {IMAGE_URL} from '@constants/url';
import {useNavigate} from '@hooks/useNavigate';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

type ListItemsProps = {
  data: IMovieList[];
  title: string;
  onSeeMore: () => void;
};

const ListItems = ({data, title, onSeeMore}: ListItemsProps) => {
  const {navigateScreen} = useNavigate();
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity onPress={onSeeMore}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      <FlatList
        nestedScrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer width={8} />}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigateScreen<DetailMovieScreenParams>('DetailMovieScreen', {
                  movieID: item?.id ?? 0,
                  title: item?.title ?? item?.name ?? '',
                });
              }}>
              <FastImage
                source={{uri: `${IMAGE_URL}${item?.poster_path}`}}
                style={styles.img}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export {ListItems};
