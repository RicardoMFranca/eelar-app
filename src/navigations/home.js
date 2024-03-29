import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import HomeScreen from '../screens/session/home';
import EventsStack from './events';
import CategoryScreen from '../screens/session/category';
import AmbientDetailScreen from '../screens/session/ambient-detail';

const Stack = createSharedElementStackNavigator();

export default function HomeStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AmbientDetail" component={AmbientDetailScreen} />
      <Stack.Screen name="EventsStack" component={EventsStack} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
}