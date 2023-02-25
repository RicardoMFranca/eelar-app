import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';

import CustomTabBar from '../components/custom/custom-tab-bar';

import HomeStack from './home';
import AboutStack from './about';
import ProfileStack from './profile';

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName != 'EditProfile' && routeName != 'EditPassword';
}

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <Tab.Navigator
      name="App"
      initialRouteName="Home"
      keyboardHidesTabBar={true}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={({ route }) => ({
          tabBarVisible: false
        })} 
      />
      <Tab.Screen 
        name="About" 
        component={AboutStack}
        options={({ route }) => ({
          tabBarVisible: false
        })}  
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={({ route }) => ({
          tabBarVisible: false
        })} 
      />
    </Tab.Navigator>
  );
}
