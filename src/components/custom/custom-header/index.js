import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CustomIcon } from '../../../util';
import { GeneralStyles, Colors, Mixins } from '../../../styles';
import Style from './style';

import LeftTopBtn from '../../buttons/left-top-btn';

export default function CustomHeader(props){
  const { underTitle, titleColor, title, customStyle, barStyle, backgroundColor,
    rightAction, rightIconName, rightCustomIconName, rightIconColor, rightText,
    leftAction, leftIconName, leftCustomIconName, leftIconColor, leftText, leftMargin } = props;

  const title_container = (
    <Text 
      style={[
        underTitle ? Style.underTitle : GeneralStyles.header.text, 
        {color: titleColor || Colors.BLACK_DEFAULT}
      ]}
    >
      {title}
    </Text>  
  )

  const right_container = (
    <TouchableOpacity 
      style={Style.rightAction}
      onPress={() => rightAction()}
    >
      { rightIconName ?
        <Icon name={rightIconName} size={Mixins.scaleSize(30)} color={rightIconColor || Colors.GRAY_DARKEST} />
      : 
        rightCustomIconName ? 
          <CustomIcon name={rightCustomIconName} size={Mixins.scaleSize(30)} color={rightIconColor || Colors.GRAY_DARKEST} />
        :
          <Text 
            style={[
              GeneralStyles.buttons.secondaryText, 
              {color: rightIconColor || Colors.BRAND_COLOR_MEDIUM}
            ]}
          >
            {rightText}
          </Text>
      }
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: backgroundColor || 'transparent'}}>
      <StatusBar
        barStyle={barStyle || 'dark-content'}
        backgroundColor={backgroundColor || Colors.WHITE_DEFAULT}
      />
      <SafeAreaView>
        <View style={[GeneralStyles.header.align, customStyle]}>
          <LeftTopBtn 
            onPress={leftAction} 
            iconName={leftIconName}
            customIconName={leftCustomIconName}
            text={leftText}
            color={leftIconColor}
            margin={leftMargin}
          />
          {title_container}
          {right_container}
        </View>
      </SafeAreaView>
    </View>
  );
}
