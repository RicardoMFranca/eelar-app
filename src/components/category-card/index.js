import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Style from './style';

import { Colors } from '../../styles';

export default function CategoryCard(props){
  const { category, onPress, cardIndex } = props;
  
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <Animated.View
        entering={SlideInRight.duration(400).delay(cardIndex*200)}
        style={Style.categoryCard}
      >
        <View style={Style.categoryIconContainer}>
          <Icon name={category?.iconName} size={16} color={Colors.BLACK_DEFAULT} />
        </View>
        <Text style={Style.categoryName} numberOfLines={1}>{category.nome}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}
