import React, { useState, useEffect, useContext } from 'react';
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { StorageService } from '../../../services';
import { Colors, GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CustomHeader from '../../../components/custom/custom-header';
import DefaultList from '../../../components/lists/default-list';

export default function HomeScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

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
    if (user) setUser(user);

    const users = [
      {id: 1, nome: "Teste 1"},
      {id: 2, nome: "Teste 2"},
      {id: 3, nome: "Teste 3"},
    ];
    setUsers(users);

    const categories = [
      {id: 1, nome: "Categoria 1"},
      {id: 2, nome: "Categoria 2"},
      {id: 3, nome: "Categoria 3"},
    ];
    setCategories(categories);
  }

  const title = (
    <Text>Categoria</Text>
  );

  const user_element = (user) => (
    <Text>{user.id} | {user.nome}</Text>
  );

  const header = (
    <View style={Style.wavyHeader}>
      <StatusBar 
        barStyle="light-content" 
      />
      <Image source={require('../../../assets/images/wave-background/wave-background.png')} style={Style.waveBackground}/>
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

  const categoryCard = (category) => (
    <View style={Style.categoryCard}>
      <View style={Style.categoryIconContainer}>
        <Text>ícone</Text>
      </View>
      <Text>{category.nome}</Text>
    </View>
  );

  return (
    <>
      {header}
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <Text style={Style.categoriesListHeader}>Categorias</Text>
        <DefaultList 
          data={categories} 
          refreshing={refreshing} 
          onRefresh={onRefresh} 
          renderItem={categoryCard}
          customStyle={Style.categoriesList}
          horizontal
        />
        
      </SafeAreaView>
    </>
  );
}
