import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Colors } from '../../styles';
import Style from './style';

export default function Loader(props){
  const { visivel } = props;

  let loader = (
    <View style={Style.background}>
      <View style={Style.loader}>
        <ActivityIndicator 
          size="large" 
          color={Colors.BLACK_DEFAULT} 
        />
      </View>
    </View>
  );

  return visivel && loader;
}
