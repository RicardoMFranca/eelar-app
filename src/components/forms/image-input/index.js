import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageCrop from 'react-native-image-crop-picker';

import { ApiService } from '../../../services';
import { CustomAlerts } from '../../../util';
import { Mixins } from '../../../styles';
import Style from './style';

import TransparentBtn from '../../buttons/transparent-btn';

export default function ImageInput({ image, setImage, id }){
  
  const cropImage = (path) => {
    ImageCrop.openCropper({
      path,
      width: 400,
      height: 400,
      cropperToolbarTitle: 'Editar Foto'
    }).then((image) => {
      const source = { uri: image.path, type: image.mime, name: `USER-IMG-${id}.jpg` };
      setImage(source);
    }).catch(e => console.warn("Erro ao recortar imagem: "+e));          
  }

  const changeImage = () => {
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

  return (
    <TouchableOpacity
      style={Style.changeImageContainer}
      onPress={() => onPress ? onPress() : null}
    >
      <Image 
        style={Style.changeImage} 
        source={image?.uri ? image : {uri: `${ApiService.IMAGE_URL}${image || 'semfoto.png'}`}}
      />
      <TransparentBtn 
        onPress={() => changeImage()} 
        label={'Alterar Foto'}
        customStyle={{
          height: Mixins.scaleSize(40),
          width: Mixins.scaleSize(142)
        }}
      />
    </TouchableOpacity>
  );
}
