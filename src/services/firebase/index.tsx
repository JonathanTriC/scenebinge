import {
  _handlerGetItem,
  _handlerRemoveItem,
  _handlerSetItem,
  showSuccessToast,
} from '@constants/functional';
import {Keys} from '@constants/keys';
import {useNavigate} from '@hooks/useNavigate';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';

const {navigateScreen, resetNavigate} = useNavigate();

export const useFirebaseLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const postData = async (params: FirebaseLogIn) => {
    setError(undefined);
    setLoading(true);

    try {
      let res = await auth()
        .signInWithEmailAndPassword(params?.email, params?.password)
        .then(async data => {
          await _handlerSetItem(Keys.userUID, data?.user?.uid);
          resetNavigate('BottomTabNavigator');
        })
        .catch(error => {
          setError(error);
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    mutate: postData,
  };
};

export const useFirebaseSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const postData = async (params: FirebaseSignUp) => {
    setError(undefined);
    setLoading(true);

    try {
      let res = await auth()
        .createUserWithEmailAndPassword(params?.email, params?.password)
        .then(async user => {
          if (user) {
            var ref = database().ref().child('user');
            var userData = {
              email: params?.email,
              full_name: params?.full_name,
            };
            ref.child(user?.user?.uid).set(userData);
            await _handlerSetItem(Keys.userUID, user?.user?.uid);
          }
        })
        .then(data => {
          resetNavigate('BottomTabNavigator');
        })
        .catch(error => {
          setError(error);
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    mutate: postData,
  };
};

export const useFirebaseLogOut = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const postData = async () => {
    setError(undefined);
    setLoading(true);
    try {
      let res = await auth()
        .signOut()
        .then(async () => {
          await _handlerRemoveItem(Keys.userUID);
          resetNavigate('OnboardingScreen');
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    mutate: postData,
  };
};

export const useFirebaseFetchDB = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<any>();

  const getData = (path: string) => {
    setError(undefined);
    setLoading(true);

    try {
      let res = database()
        .ref(path)
        .on('value', snapshot => {
          setData(snapshot.val());
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    mutate: getData,
  };
};

export const useFirebaseAddWatchList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const postData = async (params: FirebaseAddWatchList) => {
    setError(undefined);
    setLoading(true);

    const userId = await _handlerGetItem(Keys.userUID);

    var watchListData = {
      id: params?.id,
      title: params?.title,
      poster_path: params?.poster_path,
    };

    try {
      let res = await firestore()
        .collection('users')
        .doc(userId ?? '')
        .collection('watchlist')
        .add(watchListData)
        .then(() => {
          showSuccessToast('Success added to watchlist.');
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    mutate: postData,
  };
};

export const useFirebaseGetWatchList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    setError(undefined);
    setLoading(true);

    const userId = await _handlerGetItem(Keys.userUID);

    try {
      firestore()
        .collection('users')
        .doc(userId ?? '')
        .collection('watchlist')
        .get()
        .then(querySnapshot => {
          if (querySnapshot.size > 0) {
            const arrayData: any[] = [];
            querySnapshot.forEach(doc => {
              const movieData = doc.data();
              arrayData.push(movieData);
              console.log('Movie data:', movieData);
            });
            setData(arrayData);
          } else {
            setData([]);
          }
        });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    mutate: getData,
  };
};
