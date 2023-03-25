import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from './home';

const Stack = createStackNavigator();

export default function SessionStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
}