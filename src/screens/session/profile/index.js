import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, 
  RefreshControl } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import { RoutesService, StorageService } from '../../../services';
import { GeneralStyles, Mixins, Colors } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import DefaultBtn from '../../../components/buttons/default-btn';
import CustomHeader from '../../../components/custom/custom-header';
import MenuOption from '../../../components/menu-option';

export default function ProfileScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState(null);

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
      await onLoad();
    });
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  }

  const getData = async () => {
    const user = await StorageService.getUser();
    setUser(user);
  }

  return (
    <>
      <CustomHeader
        title="Perfil"
      />
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <TouchableOpacity 
          style={Style.userInfo}
          onPress={() => props.navigation.navigate("EditProfile", {user})}
        >
          <Text>{user?.nome}</Text>
        </TouchableOpacity>
        <ScrollView 
          style={GeneralStyles.aligns.content}
          refreshControl={
            <RefreshControl
              colors={[Colors.BLACK_DEFAULT]}
              refreshing={refreshing}
              onRefresh={onRefresh.bind(this)}
            />
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <MenuOption label="Editar Perfil" onPress={() => props.navigation.navigate("EditProfile", {user})} />
          <MenuOption label="Alterar Senha" onPress={() => props.navigation.navigate("EditPassword", {user})}  />
          <MenuOption label="Termos de Uso" onPress={() => RoutesService.getClientTerms()} />
        </ScrollView>
        <View style={GeneralStyles.aligns.bottom}>
          <DefaultBtn 
            onPress={() => StorageService.logout(props)} 
            label={'Sair'}
            width={Mixins.WINDOW_WIDTH*0.5}
          />
        </View>
      </SafeAreaView>
    </>
  );    
}
