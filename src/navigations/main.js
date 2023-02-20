import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StorageService } from '../services';

import SplashScreen from '../components/splash-screen';

import AuthStack from './auth';
import AppStack from './app';

const Stack = createStackNavigator();

export default function MainStack(){
  const [user, setUser] = React.useState(null);
  const [starting, setStarting] = React.useState(true);

  React.useEffect(() => {
    setTimeout(async () => {
      const user = await StorageService.getUser()
      setUser(user);
      setStarting(false);
    }, 500);
  }, []);

  if (starting) {
    return (
      <SplashScreen />
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={user ? "App" : "Auth"}
      screenOptions={{
        headerShown: false
      }}
    > 
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="App" component={AppStack}/>
    </Stack.Navigator>
  );
}