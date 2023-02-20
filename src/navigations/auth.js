import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '../screens/auth/initial';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import RecoverPasswordScreen from '../screens/auth/recover-password';

const Stack = createStackNavigator();

export default function AuthStack(){
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="RecoveryPassword" component={RecoverPasswordScreen} />
    </Stack.Navigator>
  );
}