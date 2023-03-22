/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from './src/styles';
import MainNavigator from './src/navigations';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle={'dark-content'} 
        backgroundColor={Colors.WHITE}
      />
      <MainNavigator />
    </SafeAreaProvider>
  );
}

export default App;