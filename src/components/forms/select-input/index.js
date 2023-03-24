import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { GeneralStyles } from '../../../styles';
import Style from './style';

export default function SelectInput(props){
  const { customStyle, label, value, items, setValue, placeholder } = props;

  const [open, setOpen] = useState(false);

  const label_container = ( 
    <Text 
      style={[
        GeneralStyles.forms.label, 
        Style.selectInputAlignLabel,
      ]}
    >
      {label}
    </Text>
  );

  return (
    <View style={customStyle}>
      {label_container}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        containerStyle={Style.selectInputContainer}
        style={Style.selectInput}
        itemStyle={Style.selectInputItem}
        placeholder={placeholder}
        dropDownStyle={Style.selectInputPicker}
        placeholderStyle={Style.selectInputPlaceholder}
      />
    </View>  
  );
}
