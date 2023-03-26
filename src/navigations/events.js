import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventsScreen from '../screens/session/events';
import EventDetailScreen from '../screens/session/events/event-detail';

const Stack = createStackNavigator();

export default function EventsStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}