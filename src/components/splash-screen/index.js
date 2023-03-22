import React from "react";
import Style from './style';
import { View, Image, StatusBar } from "react-native";

export default function SplashScreen(){
  return ( 
    <View style={Style.container}>
      <StatusBar 
        translucent 
        backgroundColor={'transparent'} 
        barStyle='dark-content' 
      />
    </View>
  );
}
