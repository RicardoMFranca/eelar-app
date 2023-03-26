import React from 'react';
import Style from './style';
import { TouchableOpacity, Image } from 'react-native';

export default function GobackBtn(props){
  
  return (
    <TouchableOpacity
      style={Style.goBackBtn}
      onPress={() => props.navigation.goBack()}
    >
      <Image source={require('../../assets/images/go-back-btn/go-back-btn.png')} />
    </TouchableOpacity>
  );
}
