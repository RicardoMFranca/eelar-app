import React from "react";
import Style from './style';
import { View, Image, StatusBar } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";

export default function SplashScreen(){
  return ( 
    <Animated.View 
      style={Style.container}
      exiting={FadeOut.duration(600).delay(1500)}
    >
      <StatusBar 
        translucent 
        backgroundColor={'transparent'} 
        barStyle='dark-content' 
      />
      <Image source={require('../../assets/images/splash-screen/splash-screen.png')} style={Style.splashScreenImage} />
    </Animated.View>
  );
}
