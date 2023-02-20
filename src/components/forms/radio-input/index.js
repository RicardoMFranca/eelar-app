import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GeneralStyles } from '../../../styles';

import Style from './style';

export default function RadioInput(props){
  const { title, options, current, setCurrent } = props;

  const radio_option = (option, marked) => {
    return (
      <TouchableOpacity 
        style={Style.radioInputBtn}
        onPress={() => setCurrent ? setCurrent(option.value) : null}
      >
        <View style={marked ? Style.radioInputCircleSelected : Style.radioInputCircle}>
          {marked && <View style={Style.radioInputCircleInside} />}
        </View>
        <Text style={Style.radioInputLabel}>{option.label}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={Style.radioInputContainer}>
      <Text style={GeneralStyles.forms.label}>{title}</Text>
      {options.map((o) => radio_option(o, o.value == current))}
    </View>
  );
}
