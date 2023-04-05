import React, {useState} from 'react';
import Style from './style';
import { Text, Image, StatusBar, View } from 'react-native';
import SearchBar from '../search-bar';
import GobackBtn from '../go-back-btn';
import { removeAccentes } from '../../util/helpers';

export default function WavyHeader(props){
  const {data, setSearchedItems, goBackBtn} = props;

  const search = (text) => {
    setSearchedItems(data?.filter((item) => removeAccentes(item.nome.toLowerCase()).includes(removeAccentes(text))));
  };

  return (
    <View style={Style.wavyHeader}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={'transparent'}
        translucent
      />
      {goBackBtn &&
        <GobackBtn
          {...props}
          customStyle={Style.goBackBtn}
        />
      }
      <Image source={require('../../assets/images/wave-background/wave-background.png')} style={Style.waveBackground}/>
      <View style={Style.headerContiner}>
        <Text style={Style.headerTitle(goBackBtn)}>Encontre Locais e{'\n'}Equipamentos Públicos</Text>
        <SearchBar
          setValue={(text) => search(text)}
        />
      </View>
    </View>
  );
}
