import React from 'react';
import Style from './style';
import { TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Mixins } from '../../styles';

export default function SearchBar(props){
  const { value, setValue } = props;
  
  return (
    <View style={Style.searchBarContainer}>
      <TextInput 
        style={Style.searchBar}
        placeholder="Que lugar você quer conhecer hoje?"
      />
      <TouchableOpacity style={Style.searchBtn}>
        <Icon 
          name={'search'} 
          size={Mixins.scaleSize(20)} 
          color={Colors.WHITE_DEFAULT } 
        />
      </TouchableOpacity>
    </View>
  );
}
