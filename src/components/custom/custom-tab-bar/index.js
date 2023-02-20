import React from "react";
import Style from './style';
import { View, Text, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../../util/icon-font';
import { Colors, Mixins, Typography } from "../../../styles";

export default function CustomTabBar({ state, descriptors, navigation }){
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <View style={Style.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const button = (name, color) => {
          if (name === 'Home') {
            return (
              <View style={Style.tabIconContainer}>
                <CustomIcon name="home" size={Mixins.scaleSize(22)} color={color} style={Style.tabBarIconAlign}/>
                <Text style={[{color}, Style.labelStyle, isFocused? {...Typography.FONT_BOLD} : null]}>Home</Text>
              </View>
            )
          } else if (name === 'About') {
            return (
              <View style={Style.tabIconContainer}>
                <Icon name="inbox" size={Mixins.scaleSize(22)} color={color} style={Style.tabBarIconAlign}/>
                <Text style={[{color}, Style.labelStyle, isFocused? {...Typography.FONT_BOLD} : null]}>Sobre</Text> 
              </View>
            )
          } else {
            return (
              <View style={Style.tabIconContainer}>
                <CustomIcon name="profile" size={Mixins.scaleSize(22)} color={color} style={Style.tabBarIconAlign}/>
                <Text style={[{color}, Style.labelStyle, isFocused? {...Typography.FONT_BOLD} : null]}>Perfil</Text>
              </View>
            )
          } 
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={Style.touchableContainer}
          > 
            {button(label, isFocused ? Colors.PRIMARY : Colors.GRAY_DARK)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}