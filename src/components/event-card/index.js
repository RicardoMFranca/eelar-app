import React from 'react';
import Style from './style';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { SlideInRight } from 'react-native-reanimated';
import { SharedElement } from 'react-navigation-shared-element';

import { handleEventDate } from '../../util/helpers';
import { GeneralStyles } from '../../styles';

export default function EventCard(props){
  const { event, onPress, cardIndex } = props;

  return (
    <TouchableOpacity 
      style={Style.eventCard}
      onPress={onPress}
    >
      <Animated.View
        entering={SlideInRight.duration(600).delay(cardIndex*200)}
      >
        <SharedElement id={`${event.id}`}>
          <Image source={event?.foto_principal} style={Style.eventThumbnail}/>
        </SharedElement>
        <View style={Style.eventDate}>
          <Text style={GeneralStyles.fonts.eventMonth}>{handleEventDate('month', event?.data)}</Text>
          <Text style={GeneralStyles.fonts.eventDay}>{handleEventDate('day', event?.data)}</Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 0, y: 1.0}}
          locations={[0, 1]}
          colors={['rgba(0, 0, 0, 0)', '#000']}
          style={Style.linearGradientContainer}
        >
          <Text style={Style.eventCategory}>{event?.categoria}</Text>
          <Text style={Style.eventName}>{event?.nome}</Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
}
