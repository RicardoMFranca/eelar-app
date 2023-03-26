import React from 'react';
import Style from './style';
import { Text, TouchableOpacity, Image, StatusBar, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, Mixins } from '../../styles';

export default function WavyHeader(props){
  const { ambient } = props;
  
  return (
    <View style={Style.wavyHeader}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={'transparent'}
        translucent
      />
      <Image source={require('../../assets/images/wave-background/wave-background.png')} style={Style.waveBackground}/>
      <View style={Style.headerContiner}>
        <Text style={Style.headerTitle}>Aqui um texto de no máximo duas linhas</Text>
        <View style={Style.searchBarContainer}>
          <TextInput 
            style={Style.searchBar}
            placeholder="Que lugar você quer conhecer hoje?"
          />
          <TouchableOpacity style={Style.searchBtn}>
            <Icon 
              name={'search'} 
              size={Mixins.scaleSize(20)} 
              color={Colors.WHITE_DEFAULT } 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
