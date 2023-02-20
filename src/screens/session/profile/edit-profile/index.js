import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, 
  ScrollView, TouchableWithoutFeedback, Keyboard,
  SafeAreaView } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCrop from 'react-native-image-crop-picker';

import { StorageService, RoutesService } from '../../../../services';
import { FormValidations, CustomAlerts } from '../../../../util';
import { GeneralStyles, Colors, Mixins } from '../../../../styles';
import Style from './style';

import LoaderContext from '../../../../contexts/loader';

import CustomHeader from '../../../../components/custom/custom-header';
import DefaultBtn from '../../../../components/buttons/default-btn';
import DefaultInput from '../../../../components/forms/default-input';

export default function EditProfileScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [user, setUser] = useState(null);
  const [image, setImage] = useState({uri: null});
  const [changed_image, setChangedImage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
    const { user } = props.route.params;
    if (user) {
      setUser(user);
      setImage({uri: user.foto});
      setName(user.name);
      setEmail(user.email);
    }
  }

  const changeImage = () =>{
    const options = {
      title: 'Selecione a foto',
      takePhotoButtonTitle: 'Tire uma foto',
      chooseFromLibraryButtonTitle: 'Escolha na biblioteca',
      cancelButtonTitle: 'Cancelar',
      storageOptions: {
          skipBackup: true,
          path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        // CustomAlerts.showErrorToast('Atenção', 'A seleção da foto foi cancelada pelo usuário');
      } else if (response.error) {
        CustomAlerts.showErrorToast('Atenção', 'Ops! Houve um erro ao selecionar a imagem!');   
      } else {
        cropImage(response.uri);
      }
    });
  }

  const cropImage = (path) => {
    ImageCrop.openCropper({
      path,
      width: 400,
      height: 400,
      cropperToolbarTitle: 'Editar Foto'
    }).then((image) => {
      const source = { uri: image.path, type: image.mime, name: `USER-IMG-${user.id}.jpg` };
      setChangedImage(true);
      setImage(source);
    }).catch(e => console.warn("Erro ao recortar imagem: "+e));          
  }

  const updateImage = async () => {
    let formData = new FormData();
    if (image) formData.append('imagem', image);
    await RoutesService.USER.saveImage(formData);
  }

  const updateUser = async () => {
    if (FormValidations.textLength(name, 'nome', 3) && FormValidations.emailRegex(email)){
      setLoading(true);
      if (changed_image) await updateImage();
      const body = {
        usuario: { name, email, documento, telefone }
      };
      const resp = await RoutesService.USER.patch(body, user.id);
      
      if(resp){  
        let storage_user = await StorageService.getUser();
        if (name != storage_user.name || email != storage_user.email) {
          storage_user.name = name;
          storage_user.email = email;
          await StorageService.setUser(storage_user);
        }
        setLoading(false);
        CustomAlerts.showSuccessToast('Sucesso', 'Dados atualizados!');
        props.navigation.pop(); 
      } 

      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={{flex: 1}}>
        <CustomHeader
          leftAction={() => props.navigation.goBack()} 
          leftIconName="arrow-left" 
          leftIconColor={Colors.BLACK_DEFAULT}
          title="Editar Perfil"
        />
        <SafeAreaView style={[GeneralStyles.aligns.container]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{marginTop: Mixins.scaleSize(32)}}>
              <TouchableOpacity 
                onPress={() => changeImage()}
              > 
                <View style={Style.customContainer}>
                  {/* <Image style={Style.profilePicture} source={image.uri ? image : require("../../../../assets/images/conecta-icon.png")}/> */}
                </View>
                <View style={Style.customContainer}>
                  <Text style={{color: Colors.PRIMARY}}>Alterar Imagem</Text>
                </View>
              </TouchableOpacity>
              <DefaultInput 
                label={"name"}
                value={name}
                onChangeText={setName}
                placeholder={"name"}
              />
              <DefaultInput 
                label={"E-mail"}
                value={email}
                onChangeText={setEmail}
                placeholder={"E-mail"}
                keyboardType={"email-address"}
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
