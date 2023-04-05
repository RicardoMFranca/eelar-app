import React, { useContext, useState, useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors, GeneralStyles, Mixins } from '../../../../styles';
import { goToMaps, handleEventDate } from '../../../../util/helpers';

import Style from './style';

import LoaderContext from '../../../../contexts/loader';
import DefaultBtn from '../../../../components/buttons/default-btn';
import GobackBtn from '../../../../components/go-back-btn';

export default function EventDetailScreen(props){
  const [event, setEvent] = useState({})
  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    setEvent(props.route.params.event)
  }, [])

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <View style={Style.thumbnailContainer}>
          <GobackBtn
            {...props}
          />
          <View style={Style.linearGradientContainer}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 0, y: 1.0}}
              locations={[0, 1]}
              colors={['rgba(0, 0, 0, 0)', '#000']}
              style={Style.linearGradient}
            />
          </View>
          <Image source={event?.foto_principal} style={Style.eventThumbnail}/>
        </View>

        <View style={Style.eventInfoContainer}>
          <View style={Style.eventInfoAlign}>
            <View style={Style.eventNameAddressContainer}>
              <Text style={Style.eventName}>{event?.nome}</Text>
              <Text style={[Style.eventAddress, Style.regularFont]}>{event?.endereco}</Text>
            </View>
            <View style={Style.eventDate}>
              <Text style={GeneralStyles.fonts.eventMonth}>{handleEventDate('month', event?.data)}</Text>
              <Text style={GeneralStyles.fonts.eventDay}>{handleEventDate('day', event?.data)}</Text>
            </View>
          </View>
          <View style={Style.eventTimeContainer}>
            <Icon 
              name={'watch-later'} 
              size={Mixins.scaleSize(16)} 
              color={Colors.WHITE_DEFAULT} 
              style={Style.clockAlign}
            /> 
            <Text style={[Style.eventTime, Style.regularFont]}>{event?.horario}</Text>
          </View>
          <Text style={[Style.eventDescription, Style.regularFont]}>{event?.descricao}</Text>
        </View>
      </ScrollView>
      <View style={Style.mapsBtnContainer}>
        <DefaultBtn 
          onPress={() => goToMaps(event?.endereco)}
          label='Abrir no Maps'
          customStyle={Style.mapsBtn}
          textColor={Colors.BLACK_DEFAULT}
          rightIcon={'location-pin'}
          rightIconColor={Colors.BLACK_DEFAULT}
        />
      </View>
    </>
  );
}
