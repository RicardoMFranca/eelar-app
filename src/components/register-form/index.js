import React from "react";
import { SafeAreaView, View, TouchableWithoutFeedback, Keyboard,
  ScrollView } from "react-native";

import { Colors } from '../../styles';
import Style from './style';

import CustomHeader from "../custom/custom-header";
import DefaultBtn from "../buttons/default-btn";

export default function RegisterForm(props){
  const { title, backStage, field, button_label, 
    confirmAction, buttonDisable } = props;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={{flex: 1}}>
        <CustomHeader 
          title={title}
          underTitle={true}
          leftAction={() => backStage()} 
          leftIconName='arrow-left' 
          leftIconColor={Colors.BLACK_DEFAULT}
          backgroundColor='transparent'
        />
        <SafeAreaView>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="always"
          >
            <View style={Style.container}>
              {field}
              {confirmAction && 
                <DefaultBtn
                  label={button_label || "Próximo"}
                  onPress={() => confirmAction()}
                  disabled={buttonDisable}
                  customStyle={Style.alignActionBtn}
                />
              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}
