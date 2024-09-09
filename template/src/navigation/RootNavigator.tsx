import {RootStackParamList} from '@/types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Login, Splash} from '../features/auth';

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
function Root() {
  // const selectedTheme = useSelector((state) => state?.auth?.theme);
  // console.log('===state?.auth==',selectedTheme)
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer
    // theme={selectedTheme}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
