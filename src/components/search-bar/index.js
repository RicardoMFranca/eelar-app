import React from 'react';
import Style from './style';
import { TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Mixins } from '../../styles';
import Animated, { FadeInLeft } from 'react-native-reanimated';

export default function SearchBar(props){
  const { setValue, animated, eventSearch } = props;
  
  return (
    <Animated.View 
      style={Style.searchBarContainer}
      entering={animated && FadeInLeft.duration(400).delay(400)}
    >
      <TextInput 
        style={Style.searchBar}
        placeholder={eventSearch ? "Procure eventos aqui" : "Que lugar você quer conhecer hoje?"} 
        onChangeText={setValue}
        placeholderTextColor={Colors.GRAY_DARK}
      />
      <TouchableOpacity style={Style.searchBtn}>
        <Icon 
          name={'search'} 
          size={Mixins.scaleSize(20)} 
          color={Colors.WHITE_DEFAULT } 
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
