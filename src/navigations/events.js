import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventsScreen from '../screens/session/events';

const Stack = createStackNavigator();

export default function EventsStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Events" component={EventsScreen} />
    </Stack.Navigator>
  );
}