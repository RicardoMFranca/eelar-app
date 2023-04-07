import React from 'react';
import { Image, StatusBar, View, TouchableOpacity } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

import SearchBar from '../search-bar';
import GobackBtn from '../go-back-btn';

import Style from './style';

import { removeAccentes } from '../../util/helpers';
import { StorageService } from '../../services';

export default function WavyHeader(props){
  const {data, setSearchedItems, goBackBtn, logout} = props;
  
  const search = (text) => {
    setSearchedItems(data?.filter((item) => removeAccentes(item.nome.toLowerCase()).includes(removeAccentes(text))));
  };

  const logoutBtn = () => {
    if(logout){
      return (
        <TouchableOpacity
          style={Style.logoutBtn}
          onPress={() => StorageService.logout(props)}
        >
          <Image source={require('../../assets/images/logout-btn/logout-btn.png')} />
        </TouchableOpacity>
      );
    }
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
      {logoutBtn()}
      <Image source={require('../../assets/images/wave-background/wave-background.png')} style={Style.waveBackground}/>
      <View style={Style.headerContiner}>
        <View style={Style.headerTitleContainer}>
          <Animated.Text 
          entering={ZoomIn.duration(300)}
            style={[Style.headerTitle()]}
          >
            Encontre Locais e{'\n'}Equipamentos Públicos
          </Animated.Text>
        </View>
        <SearchBar
          setValue={(text) => search(text)}
          animated
        />
      </View>
    </View>
  );
}
