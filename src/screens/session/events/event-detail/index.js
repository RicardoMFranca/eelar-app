import React, { useContext } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors, GeneralStyles, Mixins } from '../../../../styles';
import Style from './style';

import LoaderContext from '../../../../contexts/loader';
import { handleEventDate } from '../../../../util/helpers';
import DefaultBtn from '../../../../components/buttons/default-btn';

export default function EventDetailScreen(props){
  const { setLoading } = useContext(LoaderContext);

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={Style.thumbnailContainer}>
          <TouchableOpacity
            style={Style.goBackBtn}
            onPress={() => props.navigation.goBack()}
          >
            <Image source={require('../../../../assets/images/go-back-btn/go-back-btn.png')} style={Style.backIcon}/>
          </TouchableOpacity>
          <View style={Style.linearGradientContainer}>
            <LinearGradient
              start={{x: 0, y: 0}} end={{x: 0, y: 1.0}}
              locations={[0, 1]}
              colors={['rgba(0, 0, 0, 0)', '#000']}
              style={Style.linearGradient}
            />
          </View>
          <Image source={require('../../../../assets/images/temp/yoga-image.png')} style={Style.eventThumbnail}/>
        </View>

        <View style={Style.eventInfoContainer}>
          <View style={Style.eventInfoAlign}>
            <View>
              <Text style={Style.eventName}>Aulão de Yoga</Text>
              <Text style={[Style.eventAddress, Style.regularFont]}>Estr. da Viração - São Francisco</Text>
            </View>
            <View style={Style.eventDate}>
              <Text style={GeneralStyles.fonts.eventMonth}>{handleEventDate('month')}</Text>
              <Text style={GeneralStyles.fonts.eventDay}>{handleEventDate('day')}</Text>
            </View>
          </View>
          <View style={Style.eventTimeContainer}>
            <Icon 
              name={'watch-later'} 
              size={Mixins.scaleSize(16)} 
              color={Colors.WHITE_DEFAULT} 
              style={Style.clockAlign}
            /> 
            <Text style={[Style.eventTime, Style.regularFont]}>09:00 - 11:00</Text>
          </View>
          <Text style={[Style.eventDescription, Style.regularFont]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. readable content of a page when looking at its layout. </Text>
        </View>
      </ScrollView>
      <View style={Style.mapsBtnContainer}>
        <DefaultBtn 
          onPress={() => props.navigation.navigate("Login")}
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
