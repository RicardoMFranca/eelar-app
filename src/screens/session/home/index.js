import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, 
  TouchableOpacity, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors, GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CategoryCard from '../../../components/category-card';
import AmbientCard from '../../../components/ambient-card';

export default function HomeScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [ambients, setAmbients] = useState([]);

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

    const categories = [
      {id: 1, nome: "Aulão", iconName: 'account-group'},
      {id: 2, nome: "Show", iconName: 'ticket'},
      {id: 3, nome: "Praia", iconName: 'beach'},
      {id: 4, nome: "Teatro", iconName: 'theater'},
    ];
    setCategories(categories);

    const ambients = [
      {id: 1, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
      {id: 2, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
      {id: 3, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
      {id: 4, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
    ];
    setAmbients(ambients);
  }

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

  const availableEvents = (
    <View style={GeneralStyles.aligns.width24}>
      <LinearGradient
        start={{x: 0, y: 0.6}} end={{x: 0, y: 1.0}}
        locations={[0,0.99]}
        colors={['#407BFF', '#9EBCFF']}
        style={Style.availableEventsContainer}
      >
        <View>
          <Text style={[Style.eventCardTitle]}>Veja todos os{'\n'}eventos disponíveis!</Text>
          <TouchableOpacity 
            style={Style.eventCardBtn}
          >
            <Text style={Style.eventCardBtnLabel}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../../assets/images/events-image/events-image.png')} style={Style.eventsImage}/>
      </LinearGradient>
    </View>
  );

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {header}
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <Text style={[Style.homeTitle, GeneralStyles.fonts.title]}>Categorias</Text>
        <ScrollView
          style={Style.homeList}
          contentContainerStyle={{paddingRight: 32}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {categories.map((item) => (
            <CategoryCard category={item}/>
          ))}
        </ScrollView>
        <View style={Style.selectedPlaces}>
          <Text style={[Style.homeTitle, GeneralStyles.fonts.title]}>Espaços próximos de você</Text>
        </View>
        <ScrollView 
          style={Style.homeList}
          contentContainerStyle={{paddingRight: 32}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {ambients.map((item) => (
            <AmbientCard ambient={item}/>
          ))}
        </ScrollView>
        {availableEvents}
      </SafeAreaView>
    </ScrollView>
  );
}
