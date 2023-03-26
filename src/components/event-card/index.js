import React from 'react';
import Style from './style';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function EventCard(props){
  const { event } = props;

  const handleDate = (date) => {
    const typesOfDate = {
      'day': '15',
      'month': 'NOV'
    };
    return typesOfDate[date];
  }

  return (
    <TouchableOpacity style={Style.eventCard}>
      <Image source={require('../../assets/images/temp/kid-abelha.png')} style={Style.eventThumbnail}/>
      <View style={Style.eventDate}>
        <Text style={Style.eventMonth}>{handleDate('month')}</Text>
        <Text style={Style.eventDay}>{handleDate('day')}</Text>
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
    </TouchableOpacity>
  );
}
