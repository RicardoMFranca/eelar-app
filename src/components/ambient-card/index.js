import React from 'react';
import Style from './style';
import { Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function AmbientCard(props){
  const { ambient, cardHeight, customStyle } = props;
  
  return (
    <TouchableOpacity 
      style={[Style.ambientCard, customStyle, cardHeight && {height: cardHeight}]}
      onPress={() => props.navigation.navigate('Ambient', {ambient: ambient})}
    >
      <Image source={require('../../assets/images/temp/parque-da-cidade.png')} style={[Style.ambientThumbNail, cardHeight && {height: cardHeight}]}/>
      {/* <Image source={{uri: ambient?.foto_principal}} /> */}
      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 0, y: 1.0}}
        locations={[0, 1]}
        colors={['rgba(0, 0, 0, 0)', '#000']}
        style={Style.ambientInfoGradient}
      >
        <Text style={Style.ambientName}>{ambient?.nome}</Text>
        <Text style={Style.ambientAddress}>{ambient?.endereco}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
