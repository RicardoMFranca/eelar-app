import React, { useState, useContext } from 'react';
import Style from './style';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, 
  Keyboard, ScrollView,
  Image,
  TouchableOpacity} from 'react-native';
// import Toast from 'react-native-toast-message';

import { StorageService, RoutesService } from '../../../services';
import { FormValidations, CustomAlerts } from '../../../util';
import { GeneralStyles, Colors, Mixins } from '../../../styles';

import LoaderContext from '../../../contexts/loader';

import DefaultBtn from '../../../components/buttons/default-btn';
import DefaultInput from '../../../components/forms/default-input';

export default function LoginScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show_password, setShowPassword] = useState(false);

  const login = async (email, password) => {
    // Toast.hide();
    // setLoading(true);
    // if (FormValidations.loginAttempt(email, password)) {
    //   const body = JSON.stringify({email, password});
    //   const resp = await RoutesService.SESSION.post(body);
    //   if (resp) {
    //     await StorageService.setUser(resp);
    //     props.navigation.navigate('App');
    //   }
    // } else CustomAlerts.showInfoToast('Atenção', 'Verifique os dados!');
    // setLoading(false);
  }

  const loginTest = async (email, password) => { 
    const resp = {id: 1, nome: 'Teste', email, password, authentication_token: 'teste', tipo: 'normal'};
    await StorageService.setUser(resp);
    props.navigation.navigate('App');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <ScrollView 
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
      >
        <Image source={require('../../../assets/images/login-blob-1/login-blob-1.png')} style={Style.loginBlob1}/>
        <SafeAreaView style={Style.loginContainer}>
          <Text style={Style.loginTitle}>Login</Text>
          <Image 
            source={require('../../../assets/images/login-yoga/login-yoga.png')} 
            style={[Style.loginImg, Mixins.WINDOW_HEIGHT < 690 && {height: Mixins.scaleSize(216)} ]}
            
          />
          <View style={GeneralStyles.aligns.width40}>
            <DefaultInput 
              label={null}
              value={email}
              onChangeText={setEmail}
              placeholder={"E-mail"}
              leftIconName={"person"}
              keyboardType={"email-address"}
              customStyle={{
                marginTop: Mixins.scaleSize(48)
              }}

              placeholderTextColor={Colors.rgba(Colors.BLACK_DEFAULT, 0.4)}
            />
            <DefaultInput 
              value={password}
              onChangeText={setPassword}
              placeholder={"Senha"}
              leftIconName={"lock"}
              secureTextEntry={!show_password}
              rightBtnAction={() => setShowPassword(!show_password)}
              rightBtnIconName={show_password ? "visibility-off" : "visibility"}
              customStyle={{marginTop: Mixins.scaleSize(24)}}
              placeholderTextColor={Colors.rgba(Colors.BLACK_DEFAULT, 0.4)}
            />

            <DefaultBtn 
              onPress={() => loginTest(email, password)} 
              label={'Entrar'}
              disabled={!email || !password}
              textColor={Colors.WHITE_DEFAULT}
              customStyle={{marginTop: Mixins.scaleSize(24)}}
            />
            <TouchableOpacity 
              onPress={() => props.navigation.navigate("Register")}
            >
              <Text style={Style.registerBtn}>Não é cadastrado? Cadastre-se
                <Text style={Style.registerBtnBold}> aqui!</Text>
              </Text>
            </TouchableOpacity>
            
          </View>
        </SafeAreaView>
        <Image source={require('../../../assets/images/login-blob-2/login-blob-2.png')} style={Style.loginBlob2}/>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
