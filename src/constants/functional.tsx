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

export const _handlerCapitalizeEachWord = (text: string): string => {
  const words = text?.split(' ');

  if (text?.length > 0) {
    for (let i = 0; i < words.length; i++) {
      words[i] = words?.[i]?.[0]?.toUpperCase() + words?.[i]?.substring?.(1);
    }

    return words.join(' ');
  }
  return '---';
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
  console.log('🚀 ~ parseFirebaseAuthError ~ errorCode:', errorCode);
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return `The email you provided is already registered.`;
    case 'auth/invalid-credential':
      return `Login failed. The credentials provided are invalid.`;
    default:
      return `Something went wrong. Please try again.`;
  }
};
