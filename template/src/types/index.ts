import * as React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface ButtonComponentProps {
  title: string;
  secondary?: boolean;
  size?: string;
  disable?: boolean;
  borderType?: boolean;
  loadingProps?: any;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  innerRef?: React.Ref<HTMLDivElement>;
  [x: string]: any;
  onPress: () => void;
}

export interface TextInputComponentProps extends TextInputProps {
  // placeholder:string;
  // multiline:boolean;
  // secureTextEntry:boolean;
  // numberOfLines?: number;
  // placeholderTextColor: string;
  // selectionColor: string;
  // underlineColorAndroid: string;
  // editable:boolean;
  // value?: string;
  // style?: ViewStyle;
  name: string;
  control: any;
  label?: string;
  multiline?: boolean;
  style?: ViewStyle;
  iconComponent?: JSX.Element;
  viewIcon?: JSX.Element;
  onIconClick?: () => void;
  containerStyle?: ViewStyle;
  [x: string]: any;
}

export interface HeaderComponentProps {
  isRotateRTL?: boolean;
  leftComponent?: JSX.Element;
  centerComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  title?: string;
  containerStyle?: ViewStyle;
  headingStyle?: TextStyle;
  date: string;
  onDataChange: (value: string) => void;
}

export interface AlertProps {
  visible: boolean;
  title: string;
  description: string;
  buttons: {
    text: string;
    onPress: () => void;
    textStyle?: TextStyle;
  }[];
  onRequestClose?: () => void;
}

export interface SmartImageProps extends Omit<ImageProps, 'source'> {
  image: string | number | {uri: string};
  name: string;
  style?: StyleProp<ImageStyle>;
}
