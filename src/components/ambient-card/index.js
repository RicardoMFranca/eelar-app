import React from 'react';
import Style from './style';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Colors } from '../../styles';
import CustomIcon from '../../util/icon-font';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

export default function AmbientCard(props){
  const { ambient } = props;
  
  return (
    <View style={Style.ambientCard}>
      <Image source={require('../../assets/images/temp/parque-da-cidade.png')} style={Style.ambientThumbNail}/>
      {/* <Image source={{uri: ambient?.foto_principal}} /> */}
      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 0, y: 1.0}}
        locations={[0, 1]}
        colors={['rgba(0, 0, 0, 0)', '#000']}
        style={Style.ambientInfoGradient}
      >
        <Text>{ambient?.nome}</Text>
      </LinearGradient>
    </View>
  );
}
