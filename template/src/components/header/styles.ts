import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from "react-native-status-bar-height";

const StatusBarHeight = getStatusBarHeight();

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 0,
    paddingHorizontal: 20,
    height: Platform.select({
      android: 40 + StatusBarHeight,
      default: 54,
    }),
    paddingTop: Platform.OS === 'android' ? 5 : 15,
    paddingBottom: Platform.OS === 'android' ? 5 : 10,
    marginTop:42
  
  },
  headerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    // marginBottom: 2,
    height: Platform.select({
      android: 40 + StatusBarHeight,
      default: 54,
    }),
    //paddingTop: StatusBarHeight,
    paddingTop: 20,
    
  },

});

export default styles;