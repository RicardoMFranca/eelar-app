import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, 
  Keyboard, Image, SafeAreaView, ScrollView } from 'react-native';

import { GeneralStyles, Colors, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import DefaultInput from '../../../components/forms/default-input';
import DefaultBtn from '../../../components/buttons/default-btn';

export default function RegisterScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show_password, setShowPassword] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <>
        <ScrollView 
          style={[{flexgrow: 1, height: '100%'}, GeneralStyles.aligns.whiteBackground]}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Image source={require('../../../assets/images/register-blob-1/register-blob-1.png')} style={Style.registerBlob1}/>
          <SafeAreaView style={Style.registerContainer}>
            <Text style={Style.registerTitle}>Cadastro</Text>
            <Image source={require('../../../assets/images/register-knowlodge/register-knowlodge.png')} style={Style.registerImg}/>
            <View style={GeneralStyles.aligns.width40}>
              <DefaultInput 
                value={email}
                onChangeText={setEmail}
                placeholder={"E-mail"}
                leftIconName={"person"}
                keyboardType={"email-address"}
                customStyle={{marginTop: Mixins.scaleSize(32)}}
              />
              <DefaultInput
                value={password}
                onChangeText={setPassword}
                placeholder={"Senha"}
                leftIconName={"lock"}
                secureTextEntry={!show_password}
                rightBtnAction={() => setShowPassword(!show_password)}
                rightBtnIconName={show_password ? "visibility-off" : "visibility"}
                customStyle={{marginTop: Mixins.scaleSize(14)}}
              />

              <DefaultBtn
                onPress={() => props.navigation.navigate('Session')} 
                label={'Cadastrar'}
                disabled={!email || !password}
                textColor={Colors.WHITE_DEFAULT}
                customStyle={{marginTop: Mixins.scaleSize(24)}}
              />
              <TouchableOpacity 
                onPress={() => props.navigation.navigate("Login")}
              >
                <Text style={Style.registerBtn}>Já tem conta? entre
                  <Text style={Style.registerBtnBold}> aqui!</Text>
                </Text>
              </TouchableOpacity>
              
            </View>
          </SafeAreaView>
          <Image source={require('../../../assets/images/register-blob-2/register-blob-2.png')} style={Style.registerBlob2}/>
        </ScrollView>
      </>
    </TouchableWithoutFeedback>
  );
}
