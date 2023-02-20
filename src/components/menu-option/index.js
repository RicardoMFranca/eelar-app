import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../styles';
import Style from './style';

export default function MenuOption(props){
  const { label, onPress } = props;

  return (
    <TouchableOpacity
      style={Style.container}
      onPress={() => onPress()}
    >
      <Text style={Style.label}>{label}</Text>
      <Icon name="chevron-right" size={16} color={Colors.BLACK_DEFAULT} />
    </TouchableOpacity>
  );
}
