import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast, {ToastShowParams} from 'react-native-toast-message';

export const _handlerGetItem = (params: any) => {
  try {
    return AsyncStorage?.getItem(params);
  } catch (error) {}
};

export const _handlerSetItem = async (key: any, value: any, callback?: any) => {
  try {
    await AsyncStorage.setItem(key, value, callback);
  } catch (error) {}
};

export const _handlerRemoveItem = async (params: any) => {
  try {
    await AsyncStorage.removeItem(params);
  } catch (error) {}
};

export const _handlerClearItem = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

export const _handlerCapitalizeFirstLetter = (text: string) => {
  return text?.charAt(0)?.toUpperCase() + text?.slice(1);
};

export const _handlerCapitalizeEachWord = (
  text: string,
  placeholder: string,
): string => {
  const words = text?.split(' ');

  if (text?.length > 0) {
    for (let i = 0; i < words.length; i++) {
      words[i] = words?.[i]?.[0]?.toUpperCase() + words?.[i]?.substring?.(1);
    }

    return words.join(' ');
  }

  return placeholder;
};

export const showErrorToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'error',
    text1: message || 'Terjadi Kesalahan',
  });
};

export const showSuccessToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'success',
    text1: message,
  });
};

export const showWarningToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'warning',
    text1: message || 'Terjadi Kesalahan',
  });
};

export const parseFirebaseAuthError = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return `The email you provided is already registered.`;
    case 'auth/invalid-credential':
      return `Login failed. The credentials provided are invalid.`;
    default:
      return `Something went wrong. Please try again.`;
  }
};

const genreList = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
  {
    id: 10759,
    name: 'Action & Adventure',
  },
  {
    id: 10762,
    name: 'Kids',
  },
  {
    id: 10763,
    name: 'News',
  },
  {
    id: 10764,
    name: 'Reality',
  },
  {
    id: 10765,
    name: 'Sci-Fi & Fantasy',
  },
  {
    id: 10766,
    name: 'Soap',
  },
  {
    id: 10767,
    name: 'Talk',
  },
  {
    id: 10768,
    name: 'War & Politics',
  },
];

export const getGenreNameById = (id: number) => {
  let name;
  genreList.map(genre => {
    switch (id) {
      case genre.id:
        name = genre.name;
      default:
        return '';
    }
  });

  return name;
};

export const parseGenreName = (ids: number[]) => {
  const name = ids.map(id => getGenreNameById(id)).splice(0, 2);
  return ` • ${name.join(' • ')}`;
};

export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const checkIsWatchlistExist = async (title: string) => {
  try {
    const value = await _handlerGetItem(`watchlist${title}`);

    return !!value;
  } catch (error) {
    return false;
  }
};
