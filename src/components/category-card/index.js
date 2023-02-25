import React from 'react';
import Style from './style';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../../styles';
import CustomIcon from '../../util/icon-font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CategoryCard(props){
  const { category } = props;
  
  return (
    <View style={Style.categoryCard}>
      <View style={Style.categoryIconContainer}>
        <Icon name={category?.iconName} size={16} color={Colors.BLACK_DEFAULT} />
      </View>
      <Text style={Style.categoryName}>{category.nome}</Text>
    </View>
  );
}
