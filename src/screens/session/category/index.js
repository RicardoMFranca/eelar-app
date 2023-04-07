import React, { useState, useEffect, useContext } from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import SearchBar from '../../../components/search-bar';
import AmbientCard from '../../../components/ambient-card';
import { staticAmbients } from '../../../util/static-data';
import GobackBtn from '../../../components/go-back-btn';
import { removeAccentes } from '../../../util/helpers';
import Animated, { FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

export default function CategoryScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [ambients, setAmbients] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

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

  const getData = async () => {
    setAmbients([]);
    setSearchedItems([]);
    const categoryId = props.route.params.category?.id;

    staticAmbients.map((item) => {
      item.categorias.map((categoria) => {
        if (categoria.id == categoryId) {
          setSearchedItems(ambients => [...ambients, item])
          setAmbients(ambients => [...ambients, item]);
        }
      })
    })
  };

  const search = (text) => {
    setSearchedItems(ambients?.filter((item) => removeAccentes(item.nome.toLowerCase()).includes(removeAccentes(text))));
  };

  const categoryHeader = (
    <LinearGradient
      start={{x: 0, y: 0}} end={{x: 0, y: 0.99}}
      locations={[0,0.99]}
      colors={['rgba(64, 123, 255, 0.8)', '#9EBCFF']}
      style={Style.categoryHeader}
    >
      <GobackBtn
        {...props}
        customStyle={Style.goBackBtn}
      />
      <Animated.Image 
        source={require('../../../assets/images/category-header-img/category-header-img.png')} 
        style={Style.categoryHeaderImage}
        entering={FadeInRight.duration(400)}
      />
      <Animated.View 
        style={Style.currentCategoryContainer}
        entering={FadeInLeft.duration(400)}
      >
        <Text style={Style.currentCategoryLabel}>Você está vendo a categoria de:</Text>
        <Text style={Style.currentCategory}>{props.route.params.category?.nome}</Text>
      </Animated.View>
      <View style={Style.searchBarContainer}>
        <SearchBar 
          setValue={(text) => search(text)}
        />
      </View>
    </LinearGradient>
  );

  const nearbyEventsCard = (
    <TouchableOpacity 
      style={Style.nearbyEventsCardContainer}
      onPress={() => props.navigation.navigate('EventsStack')}
    >
      <View style={Style.nearbyEventsCard}>
        <Text style={Style.nearbyEventsTitle}>Eventos Próximos</Text>
        <Text style={Style.nearbyEventsSubtitle}>Clique aqui para ver  eventos próximos de você.</Text>
      </View>
      <View style={Style.backgroundSquare(false)}/>
      <View style={Style.backgroundSquare(true)}/>
    </TouchableOpacity>
  );

  const handleAmbientCardStyles = (index) => {
    if(index % 2 != 0) {
      return Style.ambientCardWrapperRight
    }else if(index != 0 && index % 2 == 0) return Style.ambientCardWrapperLeft;
  };

  const ambientsList =(
    <FlatList
      data={searchedItems}
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
            onPress={() => props.navigation.navigate('AmbientDetail', {ambient: item})}
            cardIndex={index}
          />
        </View>
      )}
    />
  );

  return (
    <View style={[GeneralStyles.aligns.container, GeneralStyles.aligns.whiteBackground]}>
      {categoryHeader}
      {ambientsList}
    </View>
  );
}
