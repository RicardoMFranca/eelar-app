import React from 'react';
import Style from './style';
import { Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function AmbientCard(props){
  const { ambient, cardHeight, customStyle, onPress, cardIndex } = props;
  
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Animated.View
        style={[Style.ambientCard, customStyle, cardHeight && {height: cardHeight}]}
        entering={FadeInDown.duration(300).delay(cardIndex*200)}
      >
        <Image source={ambient?.foto_principal} style={[Style.ambientThumbNail, cardHeight && {height: cardHeight}]}/>
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 0, y: 1.0}}
          locations={[0, 1]}
          colors={['rgba(0, 0, 0, 0)', '#000']}
          style={Style.ambientInfoGradient}
        >
          <Text style={Style.ambientName} numberOfLines={2}>{ambient?.nome}</Text>
          <Text style={Style.ambientAddress} numberOfLines={2}>{ambient?.endereco}</Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
}
