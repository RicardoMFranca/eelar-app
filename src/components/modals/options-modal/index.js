import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors, Mixins } from '../../../styles';
import Style from './style';

export default function OptionsModal(props){
  const { visible, setVisible, items } = props;
    
  const item_container = (option) => {
    return (
      <TouchableOpacity
        style={Style.optionsModalItem}
        onPress={() => option.onPress()}
      >
        <Icon 
          style={Style.optionsModalIcon} 
          name={option.iconName} 
          size={Mixins.scaleSize(16)} 
          color={Colors.PRIMARY} 
        />
        <Text style={Style.optionsModalLabel}>{option.label}</Text>
      </TouchableOpacity>
    );
  } 

  return (visible &&
    <TouchableWithoutFeedback onPress={() => setVisible(null)}>
      <View style={Style.optionsModalBackground}>
        <View style={Style.optionsModalContainer}>
          {items?.map((item) => item_container(item))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
