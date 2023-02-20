import React from 'react';
import Style from './style';
import { View, Text } from 'react-native';
import DefaultBtn from '../buttons/default-btn';
import { Mixins } from '../../styles';

export default function EmptyList(props){
  const { title, sub_title, onPress, label } = props;

  return (
    <View style={Style.container}>
      <Text style={Style.title}>{title}</Text>
      { sub_title ? <Text style={Style.subTitle}>{sub_title}</Text> : null }
      { onPress ? 
        <DefaultBtn
          onPress={onPress}
          width={Mixins.scaleSize(160)}
          label={label}
        />
      : null }
    </View>
  );
}
