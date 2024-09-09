import {MyFlashMessage} from '@/components/message';
import Root from '@/navigation/RootNavigator';
import store from '@/stores/configureStore';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Root />
        <MyFlashMessage />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
