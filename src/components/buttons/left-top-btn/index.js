import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Colors } from '../../../styles';
import Style from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../../util/icon-font';

export default function LeftTopBtn(props){
  const { onPress, iconName, customIconName, color, text } = props;

  return (
    <TouchableOpacity 
      style={Style.container}
      onPress={() => onPress()}
    >
      { iconName ?
        <Icon name={iconName} size={30} color={color ? color : Colors.BLACK_DEFAULT} />
      : 
        customIconName ? 
          <CustomIcon name={customIconName} size={30} color={color ? color : Colors.BLACK_DEFAULT} />
        :
          <Text style={[Style.actionText, {color: color ? color : Colors.BLACK_DEFAULT}]}>{text}</Text>
      }
    </TouchableOpacity>
  );
}
