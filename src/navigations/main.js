import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StorageService } from '../services';

import SplashScreen from '../components/splash-screen';

import AuthStack from './auth';
import SessionStack from './session';

const Stack = createNativeStackNavigator();

export default function MainStack(){
  const [user, setUser] = useState(null);
  const [starting, setStarting] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const user = await StorageService.getUser();
      setUser(user);
      setStarting(false);
    }, 500);
  }, []);

  if (starting) {
    return (
      <SplashScreen />
    );
  };

  return (
    <Stack.Navigator
      initialRouteName={user ? "Session" : "Auth"}
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Session" component={SessionStack}/>
    </Stack.Navigator>
  );
}