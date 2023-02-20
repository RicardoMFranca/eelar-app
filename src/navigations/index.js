import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Colors } from '../styles';

import { LoaderProvider } from '../contexts/loader';

import MainStack from  './main';

const navTheme = DefaultTheme;
navTheme.colors.background = Colors.WHITE_DEFAULT;

export default () => {
  return (
    <NavigationContainer theme={navTheme}>
      <LoaderProvider>
        <MainStack /> 
      </LoaderProvider>
    </NavigationContainer>
  );
}