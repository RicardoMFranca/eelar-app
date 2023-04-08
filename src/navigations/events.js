import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import EventsScreen from '../screens/session/events';
import EventDetailScreen from '../screens/session/events/event-detail';

const Stack = createSharedElementStackNavigator();

export default function EventsStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen 
        name="EventDetails" 
        component={EventDetailScreen}
        sharedElements={(route) => {
          return [`${route.params.event.id}`]
        }}
        animation="move"
      />
    </Stack.Navigator>
  );
}