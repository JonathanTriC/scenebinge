import {Spacer} from '@components/atoms';
import {IMAGE_URL} from '@constants/url';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

type ListItemsProps = {
  data: IMovieList[];
  title: string;
};

const ListItems = ({data, title}: ListItemsProps) => {
  return (
    <View style={{marginTop: 20}}>
      <TouchableOpacity>
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
            <TouchableOpacity>
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
