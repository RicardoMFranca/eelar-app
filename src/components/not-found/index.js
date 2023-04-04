import React from 'react';
import Style from './style';
import { View, Text, Image } from 'react-native';

export default function NotFound(props){
  
  return (
    <View style={Style.notFoundContainer}>
      <Image source={require('../../assets/images/not-found/not-found.png')} style={Style.notFoundImage}/>
      <Text style={Style.notFoundText}>Desculpe, não foi possível{'\n'}encontrar resultados!</Text>
    </View>
  );
}
