import * as React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Header as HeaderRNE , HeaderProps , Icon} from '@rneui/base';
import { HeaderComponentProps } from '@/types';
import { white } from '@/config/colors';
import { fonts, shadowStyle } from '@/config/fonts';
import { FontSize } from '@/utils/dimensions';
import DatePickerText from '../datePicker/DatePickerText';
import styles from './styles';
import Notification from '../notification/Notification';

const Header = (props:HeaderComponentProps) => {
  const {colors} = useTheme()

  const { containerStyle, title, leftComponent, centerComponent, rightComponent, date, onDataChange, headingStyle, ...rest} = props;
  return (
    <HeaderRNE
     backgroundColor={white}
     leftComponent={ leftComponent ?? { text: title, style: { color: '#1C2537', fontFamily:fonts.medium, fontSize:FontSize(20), fontWeight:'600', marginStart:12, ...headingStyle}}}
     centerComponent={centerComponent?centerComponent: <Notification isNotify={true} />}
     rightComponent={rightComponent?rightComponent: <DatePickerText date={new Date()} onDataChange={(date: string)=> onDataChange(date)} containerStyle={{marginTop: 4 , marginEnd:16}}  />}
     
     containerStyle={{ paddingVertical: 16, paddingTop:4,...shadowStyle.shadow, shadowOpacity:0}} />
  );
};

export default Header;