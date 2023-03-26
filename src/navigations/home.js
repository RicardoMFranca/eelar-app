import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/session/home';
import EventsStack from './events';

const Stack = createStackNavigator();

export default function HomeStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Events" component={EventsStack} />
    </Stack.Navigator>
  );
}