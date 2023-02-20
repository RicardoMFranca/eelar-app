import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { StorageService, RoutesService } from "../../../services";
import { FormValidations } from '../../../util';
import { GeneralStyles, Colors, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import RegisterForm from '../../../components/register-form';
import Toast from 'react-native-toast-message';
import DefaultInput from '../../../components/forms/default-input';
import DefaultBtn from '../../../components/buttons/default-btn';

export default function RegisterScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [stage, setStage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');  
  const [termos_de_uso, setTermosDeUso] = useState(false);  

  const [show_password, setShowPassword] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const backStage = () => {
    if (stage > 1) setStage(stage-1);
    else props.navigation.goBack();
  }

  const nextStage = async () => {
    if (stage < 6 && await verifyStage(stage)) setStage(stage+1);
  }

  const verifyStage = async (stage) => {
    if (stage == 1) return (
      FormValidations.textLength(name, 'nome', 3)
    );
    if (stage == 2) return (
      FormValidations.emailRegex(email, 'e-mail', 3)
      // && await RoutesService.checkEmail(email) 
    );
    if (stage == 4) return (
      FormValidations.equalPasswords(password, password_confirmation)
    );
    if (stage == 5) return (
      FormValidations.isTrue(termos_de_uso, 'termos de uso')
    );
    return true;
  }

  const createUser = async () => {
    Toast.hide();
    setLoading(true);
    const body = {
      user: { name, email, password, password_confirmation }
    };
    let resp = await RoutesService.USER.post(body);
    if (resp) {       
      resp = await RoutesService.SESSION.post({email, password});
      if (resp) {
        await StorageService.setUser(resp);
        props.navigation.navigate('App'); 
      }
    }
    setLoading(false);
  }

  const stage_name = (
    <View style={GeneralStyles.forms.container}>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={GeneralStyles.forms.input}
        placeholder='Digite seu nome'
        autoFocus={true}
      />
    </View>
  );

  const stage_email = (
    <View style={GeneralStyles.forms.container}>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={GeneralStyles.forms.input}
        keyboardType='email-address'
        autoCapitalize = 'none'
        placeholder='Digite seu email'
        autoFocus={true}
      />
    </View>
  );

  const stage_password = (
    <View style={GeneralStyles.forms.container}>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={GeneralStyles.forms.input}
        autoCapitalize = 'none'
        placeholder='Digite sua senha'
        autoFocus={true}
      />
    </View>
  );

  const stage_password_confirmation = (
    <View style={GeneralStyles.forms.container}>
      <TextInput
        value={password_confirmation}
        onChangeText={(text) => setPasswordConfirmation(text)}
        secureTextEntry={true}
        style={GeneralStyles.forms.input}
        autoCapitalize = 'none'
        placeholder='Digite a confirmação da senha'
        autoFocus={true}
      />
    </View>
  );

  const stage_terms_of_use = (
    <View style={GeneralStyles.forms.container}>
      <TouchableOpacity 
        onPress={() => setTermosDeUso(!termos_de_uso)}
        style={Style.alignTerms}
      >
        <View style={[Style.squareTerms, termos_de_uso ? Style.activeSquareTerms : null]}>
          {termos_de_uso ? <Icon name="check" size={15} color={Colors.BLACK_DEFAULT} /> : null}
        </View>

        <Text style={Style.textTerms}>Li e Aceito os</Text>
          
        <TouchableOpacity
          onPress={() => RoutesService.getClientTerms()}
        >
          <Text style={[Style.textTerms, Style.btnTerms]}>Termos de Uso e Condições</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  const current_page = (stage) => {
    switch (stage) {
      case 1:
        return (
          <RegisterForm 
            title={'Digite seu nome'}
            backStage={backStage}
            field={stage_name}  
            stage={stage}
            confirmAction={nextStage}
          />
        );
      case 2:
        return (
          <RegisterForm 
            title={'Digite seu email'}
            backStage={backStage}
            field={stage_email}  
            stage={stage}
            confirmAction={nextStage}
          />
        );
      case 3:
        return (
          <RegisterForm 
            title={'Digite sua senha'}
            backStage={backStage}
            field={stage_password}  
            stage={stage}
            confirmAction={nextStage}
          />
        );
      case 4:
        return (
          <RegisterForm 
            title={'Confirme sua senha'}
            backStage={backStage}
            field={stage_password_confirmation}  
            stage={stage}
            confirmAction={nextStage}
          />
        );
      case 5:
        return (
          <RegisterForm 
            title={'Leia os termos de uso'}
            backStage={backStage}
            field={stage_terms_of_use}  
            stage={stage}
            confirmAction={createUser}
            button_label={'Confirmar'}
          />
        );
      }
  };

  return (
    // <View style={GeneralStyles.aligns.container}>
    //   {current_page(stage)}
    // </View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={{flex: 1}}>
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
            />
            <DefaultInput
              // label={"Senha"}
              value={password}
              onChangeText={setPassword}
              placeholder={"Senha"}
              leftIconName={"lock"}
              secureTextEntry={!show_password}
              rightBtnAction={() => setShowPassword(!show_password)}
              rightBtnIconName={show_password ? "visibility-off" : "visibility"}
            />

            <DefaultBtn
              onPress={() => loginTest(email, password)} 
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
      </View>
    </TouchableWithoutFeedback>
  );
}
