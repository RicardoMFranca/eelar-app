import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Colors } from '../styles';

import MainStack from  './main';
import { LoaderProvider } from '../contexts/loader';

const navTheme = DefaultTheme;
navTheme.colors.background = Colors.WHITE;

export default () => {
  const linking = {
    prefixes: [
      'https://*.defuse.app/',
      'https://defuse.app/',
      'defuse://'
    ],
  
    config: {
      screens: {
        Home: 'home',
        Lobby: 'lobby/:code'
      },
    }
  };

  return (
    <NavigationContainer 
      linking={linking} 
      theme={navTheme}
    >
      <LoaderProvider>
        <MainStack /> 
      </LoaderProvider>
    </NavigationContainer>
  );
}