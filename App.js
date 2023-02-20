/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar, Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import MainNavigator from './src/navigations';
import { Colors } from './src/styles';

const App = () => {
  if (Text.defaultProps == null) Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
  
  if (TextInput.defaultProps == null) TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;

  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle={'dark-content'} 
        backgroundColor={Colors.WHITE_DEFAULT}/>
      <MainNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaProvider>
  );
}

export default App;