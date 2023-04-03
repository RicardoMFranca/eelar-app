import React from 'react';
import Style from './style';
import { Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CategoryCard(props){
  const { category, onPress } = props;
  
  return (
    <TouchableOpacity 
      style={Style.categoryCard}
      onPress={onPress}
    >
      <View style={Style.categoryIconContainer}>
        <Icon name={category?.iconName} size={16} color={Colors.BLACK_DEFAULT} />
      </View>
      <Text style={Style.categoryName} numberOfLines={1}>{category.nome}</Text>
    </TouchableOpacity>
  );
}
