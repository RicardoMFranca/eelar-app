import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/MaterialIcons';

import { Colors, Mixins } from '../../../styles';
import Style from './style';

export default function TransparentBtn(props){
  const { disabled, onPress, borderColor, width, textColor, label, CustomStyle,
    leftIcon, leftIconColor, rightIcon, rightIconColor} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[ 
        Style.container, 
        {
          borderColor: disabled ? Colors.GRAY_MEDIUM : (borderColor || Colors.BLACK_DEFAULT),
          width: width || '100%',
        }, 
        CustomStyle
      ]}
    >
      
      {leftIcon && 
        <Icon 
          style={Style.iconLeft} 
          name={leftIcon} 
          size={Mixins.scaleSize(30)} 
          color={leftIconColor || Colors.BLACK_DEFAULT} 
        />
      }
      <Text style={[Style.text, {color: disabled ? Colors.GRAY_MEDIUM : (textColor ? textColor : Colors.BLACK_DEFAULT)}]}>
        {label}
      </Text>
      {rightIcon && 
        <Icon 
          style={Style.iconRight} 
          name={rightIcon} 
          size={Mixins.scaleSize(30)} 
          color={rightIconColor || Colors.BLACK_DEFAULT } 
        />
      }
    </TouchableOpacity>
  );
}
