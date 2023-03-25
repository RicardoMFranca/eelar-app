import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../components/splash-screen';

import InitialScreen from '../screens/auth/initial';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';


const Stack = createNativeStackNavigator();

export default function MainStack(){
  // const [user, setUser] = useState(null);
  // const [starting, setStarting] = useState(true);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const user = await StorageService.getUser();
  //     setUser(user);
  //     setStarting(false);
  //   }, 500);
  // }, []);

  // if (starting) {
  //   return (
  //     <SplashScreen />
  //   );
  // }

  return (
    <Stack.Navigator
      initialRouteName={"Initial"}
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}