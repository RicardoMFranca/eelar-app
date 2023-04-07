import React, {useEffect} from 'react';
import { Image, StatusBar, View, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

import SearchBar from '../search-bar';
import GobackBtn from '../go-back-btn';

import Style from './style';

import { removeAccentes } from '../../util/helpers';
import { StorageService } from '../../services';

export default function WavyHeader(props){
  const {data, setSearchedItems, goBackBtn, logout} = props;
  const titleHeight = useSharedValue(0);

  useEffect(() => {
    titleHeight.value = withDelay(600, withTiming(48, {duration: 80}))
  }, [])
  
  const search = (text) => {
    setSearchedItems(data?.filter((item) => removeAccentes(item.nome.toLowerCase()).includes(removeAccentes(text))));
  };

  const titleHeightStyle = useAnimatedStyle(() => {
    return {
      height: titleHeight.value,
    };
  });

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
            style={[Style.headerTitle()]}
          >
            Encontre Locais e{'\n'}Equipamentos Públicos
          </Animated.Text>
        </View>
        <SearchBar
          setValue={(text) => search(text)}
        />
      </View>
    </View>
  );
}
