import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGIN, SPLASH} from '../assets/images';
import {resetAndGo} from '@/utils/function';
import {
  getLoggedInSessionData,
  getLoggedInSessionToken,
} from '../utils/storage';
import {isEmpty} from 'lodash';
import {setUserInfo} from '@/stores/reducers/auth';
import {useDispatch} from 'react-redux';
import {IMAGES} from '@/utils/Images';
import {wp} from '@/utils/dimensions';

const Splash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(
      () => {
        redirectScreen();
      },
      Platform.OS === 'ios' ? 1000 : 3000,
    );
    return () => {};
  }, []);

  const redirectScreen = async () => {
    let storedUserToken = await getLoggedInSessionToken();
    let getdUserData = await getLoggedInSessionData();
    if (!isEmpty(storedUserToken)) {
      dispatch(setUserInfo(getdUserData));
      startAfterDelay('Main');
    } else {
      startAfterDelay('Login');
    }
  };

  const startAfterDelay = (routeName: string) => {
    resetAndGo(navigation, routeName, '');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={LOGIN} style={{width: wp(25), height: wp(25)}} />
      </View>
    </View>
  );
};

export default Splash;
