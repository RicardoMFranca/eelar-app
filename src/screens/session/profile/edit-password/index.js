import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { StorageService, RoutesService } from "../../../../services";
import { FormValidations, CustomAlerts } from '../../../../util';
import { GeneralStyles, Colors } from '../../../../styles';
import Style from './style';

import LoaderContext from '../../../../contexts/loader';

import CustomHeader from '../../../../components/custom/custom-header';
import DefaultBtn from '../../../../components/buttons/default-btn';
import DefaultInput from '../../../../components/forms/default-input';

export default function EditPasswordScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [user, setUser] = useState(null);

  const [password, setPassword] = useState('');
  const [show_password, setShowPassword] = useState(false);

  const [password_new, setPasswordNew] = useState('');
  const [show_password_new, setShowPasswordNew] = useState(false);

  const [password_confirmation, setPasswordConfirmation] = useState('');  
  const [show_password_confirmation, setShowPasswordConfirmation] = useState(false);

  useEffect(() => {
    (async () => {
      await onLoad();
    })();
  }, []);

  const onLoad = async () => {
    setLoading(true);
    await getData();
    setLoading(false);
  }

  const getData = async () => {
    const user = await StorageService.getUser();
    if (user) setUser(user);
  }

  const updateUser = async () => {
    setLoading(true);
    if (FormValidations.equalPasswords(password, password_confirmation)){
      let body = JSON.stringify({
        user: {
          id: user.id,
          password,
          password_confirmation,
        }
      });
      const resp = await RoutesService.USER.patch(body);
      
      if(resp && resp.success){ 
        CustomAlerts.showSuccessSnackbar('Senha alterada com sucesso!');
        props.navigation.pop(); 
      } else {
        CustomAlerts.showDangerSnackbar('Erro ao atualizar senha!');
      }
    }
    setLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={{flex: 1}}>
        <CustomHeader
          leftAction={() => props.navigation.goBack()} 
          leftIconName="arrow-left" 
          leftIconColor={Colors.BLACK_DEFAULT}
          title="Alterar Senha"
        /> 
        <SafeAreaView style={GeneralStyles.aligns.container}>
          <ScrollView>
            <View>
              <DefaultInput 
                label={"Senha Atual"}
                value={password}
                onChangeText={setPassword}
                placeholder={"Digite aqui..."}
                secureTextEntry={!show_password}
                rightBtnAction={() => setShowPassword(!show_password)}
                rightBtnIconName={show_password ? "visibility-off" : "visibility"}
              />
              <DefaultInput 
                label={"Nova Senha"}
                value={password_new}
                onChangeText={setPasswordNew}
                placeholder={"Digite aqui..."}
                secureTextEntry={!show_password_new}
                rightBtnAction={() => setShowPasswordNew(!show_password_new)}
                rightBtnIconName={show_password_new ? "visibility-off" : "visibility"}
              />
              <DefaultInput 
                label={"Confirmar Senha"}
                value={password_confirmation}
                onChangeText={setPasswordConfirmation}
                placeholder={"Digite aqui..."}
                secureTextEntry={!show_password_confirmation}
                rightBtnAction={() => setShowPasswordConfirmation(!show_password_confirmation)}
                rightBtnIconName={show_password_confirmation ? "visibility-off" : "visibility"}
              />
            </View>
          </ScrollView>
          <View style={[GeneralStyles.aligns.bottom, GeneralStyles.aligns.width32]}>
            <DefaultBtn
              label={'Salvar'}
              onPress={() => updateUser()}
            />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
