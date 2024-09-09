import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  withSafeAreaInsets,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useForm} from 'react-hook-form';
import Button from '@/components/button/Button';
import {TextInput} from '@/components/input';
import {loginSchema} from '@/config/validators';
import {zodResolver} from '@hookform/resolvers/zod';
import {LoginScreenNavigationProps} from '@/types/navigation';
import {LoginInput} from '../types';
import {LOGIN} from '../assets/images';
import {FontSize} from '@/utils/dimensions';
import {fonts} from '@/config/fonts';


const Login = () => {
  const {colors} = useTheme();
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const insets = useSafeAreaInsets();
  const {control, handleSubmit} = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [hidePassword, sethidePassword] = useState(true);
  const [isChecked, setisChecked] = useState(false);
  // const fontFamily = getFontFamily('');
  const togglePwdVisibility = () => {
    sethidePassword(!hidePassword);
  };

  function onSubmit({username, password}: LoginInput) {
    console.log('===username===', username);
    console.log('===password===', password);
  }

  const renderItem = ({item, index}: any) => {
    return (
      <>
        <Image
          source={item?.image}
          style={styles.illustrationStyle}
          resizeMode="contain"
        />
        <Text style={{...styles.parentHeading, color: colors.text}}>
          {item?.heading}
        </Text>
        <Text style={{ ...styles.sliderHeading}}>
          {item?.text}
        </Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flexGrow: 1,
        }}>
        <View
          style={styles.fullWidth}
          // pointerEvents={isLoading ? 'none' : 'auto'}
        >
      
          <View style={{flex: 1, marginHorizontal: '6%'}}>
            <Image source={LOGIN} style={styles.logo} resizeMode="contain" />
            <Text style={{...styles.parentHeading, color: colors.text}}>
              Welcome back!
            </Text>
            <Text style={{...styles.subHeading, color: colors.text}}>
              {'Enter your credentials to access your account!'}
            </Text>
            <TextInput
              label={'Username : '}
              placeholder={'Type Username...'}
              style={{marginTop: 24}}
              control={control}
              name={'username'}
            />
            <TextInput
              label={'Password : '}
              placeholder={'Type Password...'}
              style={{marginTop: 12}}
              iconComponent={
                <Ionicons
                  name={hidePassword ? 'eye-off' : 'eye'}
                  size={20}
                  color={colors.primary}
                />
              }
              secureTextEntry={hidePassword}
              onIconClick={togglePwdVisibility}
              control={control}
              name={'password'}
            />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.rememberMEViewStyle}>
                <TouchableOpacity onPress={() => setisChecked(!isChecked)}>
                  <MaterialIcons
                    name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                    size={20}
                    color={'#525252'}
                  />
                </TouchableOpacity>
                <Text style={styles.rememberMeText}>{'Remember me'}</Text>
              </View>
              <Text
                onPress={() => navigation.navigate('Forgot')}
                style={{...styles.forgotpasswordText}}>
                Forgot Password?
              </Text>
            </View>
            <Button
              title={'Sign In'}
              containerStyle={styles.signinButtonStyle}
              onPress={() => navigation.navigate('Main')}
              // loading={isLoading}
              // onPress={handleSubmit(onSubmit)}
            />
            <View style={styles.bottomView}>
              <Text style={{color: colors.text,...styles.bottomTextStyle}}>
                Don't have an account?{' '}
                <Text
                  onPress={() => console.log('Signup')}
                  style={{...styles.signupTextStyle,color: colors.primary}}>
                  {' '}
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F3F4F7'},
  logo: {
    marginTop: '28%',
    height: '14%',
    width: '14%',
    alignSelf: 'center',
  },
  illustrationStyle: {
    marginTop: '23%',
    height: '42%',
    width: '72%',
    alignSelf: 'center',
  },
  sliderHeading:{
    marginVertical: 4,
    marginBottom: 4,
    alignSelf: 'center',
    fontFamily: fonts.regular,
    fontSize: 15,
    marginTop: 8,
    color: '#55606D',
    marginHorizontal: '10%',
    textAlign: 'center',
    lineHeight: 20,
  },
  parentHeading: {
    fontSize: FontSize(24),
    fontWeight: '600',
    marginBottom: 4,
    alignSelf: 'center',
    fontFamily: fonts.bold,
  },
  activeDotStyle:{
    width: 26,
    marginTop: '-82%',
    height: 6,
  },

  subHeading: {
    // fontWeight: '500',
    marginVertical: 4,
    marginBottom: 4,
    alignSelf: 'center',
    fontFamily: fonts.regular,
    fontSize: 15,
    marginTop: 8,
  },
  rememberMEViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginStart: 4,
  },
  bottomView: {flex: 1, justifyContent: 'flex-end', marginBottom: 16},
  signinButtonStyle:{
    marginTop: '12%',
    width: '75%',
    marginStart: '14%',
  },
  forgotpasswordText: {
    fontFamily: fonts.medium,
    alignSelf: 'flex-end',
    color: '#525252',
    fontSize: 15,
  },
  rememberMeText: {
    fontFamily: fonts.medium,
    alignSelf: 'flex-end',
    color: '#525252',
    fontSize: 15,
    marginStart: 4,
    marginBottom: 1,
  },
  forgotpasswordView: {
    padding: 8,
    marginTop: 18,
    alignSelf: 'center',
  },
  bottomTextStyle:{
    fontFamily: fonts.medium,
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 15,
  },
  signupTextStyle:{
    fontFamily: fonts.bold,
    textDecorationLine: 'underline',
    fontWeight: '800',
    fontSize: 15,
  },
  fullWidth: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Login;
