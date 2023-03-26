import React from 'react';
import { View, Text, Image, SafeAreaView,
StatusBar } from 'react-native';

import { Colors, GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import DefaultBtn from '../../../components/buttons/default-btn';

export default function InitialScreen(props){
  return (
    <>
      <StatusBar 
        barStyle={'dark-content'} 
        backgroundColor={'transparent'}
        translucent={true}
      />
      <SafeAreaView style={[GeneralStyles.aligns.container, {backgroundColor: 'yellow'}]}>
        <Image source={require('../../../assets/images/initial-background/initial-background.png')} style={Style.initialBackground}/>
        <Image source={require('../../../assets/images/initial-training-img/initial-training-img.png')} style={Style.initialImg}/>
        <View style={GeneralStyles.aligns.container}>
          <View style={[GeneralStyles.aligns.bottom, GeneralStyles.aligns.width32]}>
            <Text style={Style.titleText}>Aqui um título</Text>
            <Text style={Style.subtitleText}>Aqui um texto de apoio de até duas linhas para o título</Text>
            <DefaultBtn 
              onPress={() => props.navigation.navigate("Login")}
              label='Entrar'
              customStyle={{marginBottom: Mixins.scaleSize(10), backgroundColor: Colors.SECONDARY}}
            />
            <DefaultBtn 
              onPress={() => props.navigation.navigate("Register")}
              label='Cadastrar'
              customStyle={{marginBottom: Mixins.scaleSize(24), backgroundColor: Colors.WHITE_DEFAULT}}
              textColor={Colors.BLACK_TONE_1}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );  
};