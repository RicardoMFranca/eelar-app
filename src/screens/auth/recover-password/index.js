import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Toast from 'react-native-toast-message';

import { FormValidations } from '../../../util';
import { RoutesService } from '../../../services';
import { Colors, GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CustomHeader from '../../../components/custom/custom-header';
import DefaultBtn from '../../../components/buttons/default-btn';
import SuccessFeedback from '../../../components/success-feedback';
import DefaultInput from '../../../components/forms/default-input';

export default function RecoverPasswordScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [email, setEmail] = useState('');
  const [email_sent_success, setEmailSentSuccess] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  const sendRecovery = async () => {
    Toast.hide();
    setLoading(true);
    if (FormValidations.emailRegex(email)){
      const resp = await RoutesService.RECOVERY_PASSWORD.get(email);
      if (resp) setEmailSentSuccess(true);
    }
    setLoading(false);
  }

  const recovery_container = (
    <>
      <CustomHeader 
        title="Recuperar Senha"
        leftAction={() => props.navigation.goBack()} 
        leftIconName='arrow-left' 
        leftIconColor={Colors.BLACK_DEFAULT}
      />
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <View style={GeneralStyles.aligns.width32}>
          <Text style={Style.instructionsText}>Insira o e-mail que você usa para acessar o aplicativo.</Text>
          <Text style={Style.instructionsDesc}>Vamos enviar um e-mail para você recuperar a senha da conta.</Text>
          <DefaultInput 
            label={"E-mail"}
            value={email}
            onChangeText={setEmail}
            placeholder={"Digite seu e-mail"}
          />
        </View>
        <View style={[GeneralStyles.aligns.bottom, GeneralStyles.aligns.width32]}>
          <DefaultBtn
            label="Enviar"
            onPress={() => sendRecovery(email)}
            disabled={email == ''}
          />
        </View>
      </SafeAreaView>
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={{flex: 1}}>
        { email_sent_success ? 
          <SuccessFeedback
            title='E-mail enviado!'
            description='Verifique seu e-mail e clique no link para redefinir sua senha. Depois disso, é só fazer seu login.'
            labelText='Voltar e Logar'
            onPress={() => props.navigation.pop()}
            leftAction={() => props.navigation.pop()}
          /> 
        : recovery_container}
      </View>
    </TouchableWithoutFeedback>
  );
}
