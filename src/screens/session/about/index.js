import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { GeneralStyles } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CustomHeader from '../../../components/custom/custom-header';

export default function AboutScreen(props){
  const { setLoading } = useContext(LoaderContext);

  useEffect(() => {
    (async () => {
      await onLoad();
      await onReload();
    })();
  }, []);

  const onLoad = async () => {
    setLoading(true);
    await getData();
    setLoading(false);
  }

  const onReload = async () => {
    return props.navigation.addListener('focus', async () => {
      await getData();
    });
  }

  const getData = async () => {
    
  }

  return (
    <>
      <CustomHeader
        title="Sobre"
      />
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <View style={GeneralStyles.aligns.content}>
          <Text style={Style.labelText}>Apenas uma tela de exemplo.</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
