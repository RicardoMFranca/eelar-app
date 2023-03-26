import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors, Mixins } from '../../../styles';
import Style from './style';

export default function DefaultBtn(props){
  const { disabled, onPress, backgroundColor, width, textColor, label, customStyle, 
    leftIcon, leftIconColor, rightIcon, rightIconColor } = props;
  
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[Style.container, 
        {
          backgroundColor: disabled ? Colors.GRAY_MEDIUM : (backgroundColor || Colors.PRIMARY),
          width: width || '100%', 
        },
        customStyle,
      ]}
    >
      {leftIcon && 
        <Icon 
          style={Style.iconLeft} 
          name={leftIcon} 
          size={Mixins.scaleSize(30)} 
          color={leftIconColor || Colors.WHITE_DEFAULT} 
        />
      }
      <Text style={[Style.text, {color: disabled ? Colors.GRAY_DARK : (textColor || Colors.WHITE_DEFAULT)}]}>
        {label}
      </Text>
      {rightIcon && 
        <Icon 
          style={Style.iconRight} 
          name={rightIcon} 
          size={Mixins.scaleSize(16)} 
          color={rightIconColor || Colors.WHITE_DEFAULT} 
        />
      }
    </TouchableOpacity>
  );
}
