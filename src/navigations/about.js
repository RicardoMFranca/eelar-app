import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/session/about';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}