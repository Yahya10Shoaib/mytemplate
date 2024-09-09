import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  LoginPhone: { data: any };
  Signup: undefined;
  Password: undefined;
  OTPVerification: undefined;
  Forgot: undefined;
  AuthStack: undefined;
  Main:undefined;
  PlacedOrder:undefined
  ProductDetail:undefined;
  Cart:undefined;
  Checkout:undefined
  HostPage:undefined
  
  
  // VenderStack: undefined;
  // Dashboard: undefined;

};
export type BottomStackParamList = {
  Home: undefined;
  Chat: undefined;
  Profile: undefined;
  Expense: undefined;
  Booking: undefined;
  Search: undefined;
  SearchResults:undefined;
  Workshop:{data:any};
  Cart:undefined;
  Review:undefined;
  History:undefined; 
};

export type LoginScreenNavigationProps = CompositeNavigationProp<
  NavigationProp<RootStackParamList, "Login">,
  NativeStackNavigationProp<RootStackParamList>
>;

export type LoginPhoneNavigationProps = CompositeNavigationProp<
  NavigationProp<RootStackParamList, "LoginPhone">,
  NativeStackNavigationProp<RootStackParamList>
>;

export type OTPVerificationNavigationProps = CompositeNavigationProp<
  NavigationProp<RootStackParamList, "OTPVerification">,
  NativeStackNavigationProp<RootStackParamList>
>;
export type PasswordScreenNavigationProps = CompositeNavigationProp<
  NavigationProp<RootStackParamList, "Password">,
  NativeStackNavigationProp<RootStackParamList>
>;

export type ForgotScreenNavigationProps = CompositeNavigationProp<
  NavigationProp<RootStackParamList, "Forgot">,
  NativeStackNavigationProp<RootStackParamList>
>;

export type PlacedOrderNavigationProps = CompositeNavigationProp<
  NavigationProp<RootStackParamList, 'PlacedOrder'>,
  NativeStackNavigationProp<RootStackParamList>
>;

