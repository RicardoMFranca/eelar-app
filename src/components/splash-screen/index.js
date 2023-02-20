import React from "react";
import Style from './style';
import { View, Image, StatusBar } from "react-native";

export default function SplashScreen(){
  return ( 
    <View style={Style.container}>
      <StatusBar hidden={true} />
      <Image width="130" height="130" source={require('../../assets/images/eelar-logo/eelar-logo.png')} />
    </View>
  );
}
