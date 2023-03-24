import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Colors } from '../../../styles';
import Style from './style';

export default function TopBtn(props){
  const { onPress, textColor, label } = props; 

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={Style.container}
    >
      <Text style={[Style.text, textColor ? textColor : Colors.WHITE_DEFAULT]}>{label}</Text>
    </TouchableOpacity>
  );
}
