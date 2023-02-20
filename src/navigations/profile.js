import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/session/profile';
import EditProfileScreen from '../screens/session/profile/edit-profile';
import EditPasswordScreen from '../screens/session/profile/edit-password';

const Stack = createStackNavigator();

export default function ProfileStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="EditPassword" component={EditPasswordScreen} />
    </Stack.Navigator>
  );
}