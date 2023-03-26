import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, Text, 
  TouchableOpacity, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Colors, GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CategoryCard from '../../../components/category-card';
import AmbientCard from '../../../components/ambient-card';
import WavyHeader from '../../../components/wavy-header';

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
            onPress={() => props.navigation.navigate("EventsStack")}
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
      <WavyHeader/>
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <Text style={[GeneralStyles.aligns.sessionTitle, GeneralStyles.fonts.title]}>Categorias</Text>
        <ScrollView
          style={GeneralStyles.aligns.defaultList}
          contentContainerStyle={{paddingRight: 32}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {categories.map((item) => (
            <CategoryCard 
              category={item}
              key={'categoria-' + item.id}
            />
          ))}
        </ScrollView>
        <View style={Style.selectedPlaces}>
          <Text style={[GeneralStyles.aligns.sessionTitle, GeneralStyles.fonts.title]}>Espaços próximos de você</Text>
        </View>
        <ScrollView 
          style={GeneralStyles.aligns.defaultList}
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
