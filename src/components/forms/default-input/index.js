import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors, GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

export default function DefaultInput(props){
  const { label, value, onChangeText, errorLabel, 
    customStyle, customType, customOptions,
    leftIconName, rightBtnAction, rightBtnIconName, 
    secureTextEntry, autoCapitalize, placeholder, keyboardType, editable, 
    customInputStyle, placeholderTextColor } = props;

  const [ isFocused, setIsFocused ] = useState(false);
  const [ isValid, setIsValid ] = useState(true);

  const label_container = ( 
    label &&
    <Text 
      style={[
        GeneralStyles.forms.label, 
        Style.defaultInputAlignLabel(isFocused),
        // isValid ? null : {color: Colors.ALERT_MEDIUM}
      ]}
    >
      {label}
    </Text>
  );

  const right_btn = (
    <TouchableOpacity 
      style={Style.defaultInputBtnIcon} 
      onPress={() => rightBtnAction()}
    >
      <Icon 
        name={rightBtnIconName}  
        size={Mixins.scaleSize(24)} 
        color={Colors.PRIMARY} 
      /> 
    </TouchableOpacity>
  );

  const error_message = (
    <Text style={Style.defaultInputError}>{errorLabel}</Text>
  );

  return (
    <View style={customStyle}>
      {label_container}
      <View style={Style.defaultInputAlignIconInput}>
        {leftIconName ? 
          <Icon 
            name={leftIconName}  
            size={Mixins.scaleSize(24)} 
            color={Colors.PRIMARY} 
            style={Style.defaultInputLeftIcon}
          /> 
        : null}
        {customType ? 
          <TextInputMask
            type={customType}
            options={customOptions}
            value={value ? String(value) : ''}
            onChangeText={(value) => onChangeText(value)}
            style={[
              Style.defaultInputContainer(isFocused, leftIconName, editable), 
              customInputStyle
              // isValid ? null : {borderColor: Colors.ALERT_MEDIUM}
            ]}
            autoCapitalize={autoCapitalize || 'none'}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.GRAY_MEDIUM}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              // setIsValid(value != '');
            }}
            editable={editable}
          />
        :
          <TextInput
            value={value ? String(value) : ''}
            onChangeText={(value) => onChangeText(value)}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={[
              Style.defaultInputContainer(isFocused, leftIconName, editable), 
              customInputStyle
              // isValid ? null : {borderColor: Colors.ALERT_MEDIUM}
            ]}
            autoCapitalize={autoCapitalize || 'none'}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.GRAY_MEDIUM}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              // setIsValid(value != '');
            }}
            editable={editable}
          />
        }
        {rightBtnAction ? right_btn : null}
      </View>
      {isValid ? null : error_message}
    </View>  
  );
}
