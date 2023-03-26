import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, Text, View, SafeAreaView, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CategoryCard from '../../../components/category-card';
import WavyHeader from '../../../components/wavy-header';
import EventCard from '../../../components/event-card';
import SearchBar from '../../../components/search-bar';
import AmbientCard from '../../../components/ambient-card';

export default function CategoryScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [refreshing, setRefreshing] = useState(false);
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

    const ambients = [
      {id: 1, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
      {id: 2, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
      {id: 3, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
      {id: 4, nome: "Parque da cidade", endereco: 'Estr. da Viração - São Francisco', foto_principal: '../../assets/images/temp/parque-da-cidade.png'},
    ];
    setAmbients(ambients);
  }

  const categoryHeader = (
    <LinearGradient
      start={{x: 0, y: 0}} end={{x: 0, y: 0.99}}
      locations={[0,0.99]}
      colors={['rgba(64, 123, 255, 0.8)', '#9EBCFF']}
      style={Style.categoryHeader}
    >
      <Image source={require('../../../assets/images/category-header-img/category-header-img.png')} style={Style.categoryHeaderImage}/>
      <View style={Style.currentCategoryContainer}>
        <Text style={Style.currentCategoryLabel}>Você está vendo a categoria de:</Text>
        <Text style={Style.currentCategory}>Parques</Text>
      </View>
      <View style={Style.searchBarContainer}>
        <SearchBar/>
      </View>
    </LinearGradient>
  );

  const nearbyEventsCard = (
    <View style={Style.nearbyEventsCardContainer}>
      <View style={Style.nearbyEventsCard}>
        <Text style={Style.nearbyEventsTitle}>Eventos Próximos</Text>
        <Text style={Style.nearbyEventsSubtitle}>Clique aqui para ver  eventos próximos de você.</Text>
      </View>
      <View style={Style.backgroundSquare(false)}/>
      <View style={Style.backgroundSquare(true)}/>
    </View>
  );

  const handleAmbientCardStyles = (index) => {
    if(index % 2 != 0) {
      return Style.ambientCardWrapperRight
    }else if(index != 0 && index % 2 == 0) return Style.ambientCardWrapperLeft;
  };

  const ambientsList =(
    <FlatList
      data={ambients}
      style={Style.listContainer}
      contentContainerStyle={{paddingBottom: Mixins.scaleSize(56)}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      keyExtractor={item => `${item?.id}`}
      renderItem={({item, index}) => (
        <View style={[Style.ambientCardWrapper, handleAmbientCardStyles(index)]}>
          {index === 1 && nearbyEventsCard}
          <AmbientCard
            ambient={item}
            key={'ambiente-' + item.id}
            customStyle={[Style.verticalListCard]}
            cardHeight={Mixins.scaleSize(200)}
          />
        </View>
      )}
    />
  );

  return (
    <View style={GeneralStyles.aligns.container}>
      {categoryHeader}
      {ambientsList}
    </View>
  );
}
