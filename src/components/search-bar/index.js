import React from 'react';
import Style from './style';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../../styles';
import CustomIcon from '../../util/icon-font';

export default function SearchBar(props){
  const { value, autoFocus } = props;

  const search = async (text, setText, setLoading, defineTimeout, setData) => {
    setText(text);
    setLoading(true)
    if(this.state.timeout) clearTimeout(this.state.timeout);
    const timeout = setTimeout(async () => { 
      await setData(text);
      setLoading(false);
    }, 1500);
    defineTimeout(timeout);
  }

  const cancelButton = (  
    <TouchableOpacity 
      onPress={() => search('')}
    >
      <Text style={Style.cancelBtnTxt}>Cancelar</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={Style.container}>
      <View style={Style.isTyping}>
        <TextInput
          style={[Style.inputField, Platform.OS === "ios" ? Style.containerIOS : null]}
          keyboardType="default"
          placeholder="Item ou Supermercado"
          placeholderTextColor={Colors.rgba(Colors.BLACK_DEFAULT, 0.25)}
          value={value}
          onChangeText={(text) => search(text)}
          autoFocus={autoFocus}
        /> 
        <CustomIcon name={'search'} size={20} color={Colors.BRAND_COLOR_ROSA} style={Style.inputIcon}/>
      </View> 
      {value !== '' ? cancelButton : null} 
    </View>
  );
}
