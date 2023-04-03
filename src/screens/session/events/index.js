import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CategoryCard from '../../../components/category-card';
import WavyHeader from '../../../components/wavy-header';
import EventCard from '../../../components/event-card';
import { staticEvents } from '../../../util/static-data';

export default function EventsScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);

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
  };

  const onReload = async () => {
    return props.navigation.addListener('focus', async () => {
      await onLoad();
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  const getData = async () => {

    const categories = [
      {id: 1, nome: "Aulão", iconName: 'account-group'},
      {id: 2, nome: "Show", iconName: 'ticket'},
      {id: 3, nome: "Praia", iconName: 'beach'},
      {id: 4, nome: "Teatro", iconName: 'theater'},
    ];
    setCategories(categories);

    setEvents(staticEvents);
  };

  const selectedPlacesBanner = (
    <TouchableOpacity 
      style={[GeneralStyles.aligns.width24]}
      onPress={() => props.navigation.navigate('Home')}
    >
      <LinearGradient
        start={{x: 0, y: 0}} end={{x: 0, y: 0.99}}
        locations={[0,0.99]}
        colors={['rgba(64, 123, 255, 0.8)', '#9EBCFF']}
        style={Style.recommendationBanner}
      >
        <Image source={require('../../../assets/images/recommendation-banner/recommendation-banner.png')} style={Style.recommendationBannerImage}/>
        <Text style={Style.selectedPlacesTitle}>Clique aqui e veja todos os lugares que separamos para você</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <WavyHeader/>
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <Text style={[GeneralStyles.aligns.sessionTitle, GeneralStyles.fonts.title]}>Próximos eventos</Text>
        <ScrollView
          style={GeneralStyles.aligns.defaultList}
          contentContainerStyle={{paddingRight: 32}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {events.map((item) => (
            <EventCard
              event={item}
              onPress={() => props.navigation.navigate('EventDetails', {event: item})}
              key={'evento-' + item.id}
            />
          ))}
        </ScrollView>

        {selectedPlacesBanner}
        <Text style={[GeneralStyles.aligns.sessionTitle, GeneralStyles.fonts.title]}>Categorias</Text>
        <ScrollView
          style={GeneralStyles.aligns.defaultList}
          contentContainerStyle={{paddingRight: 32, paddingBottom: Mixins.scaleSize(48)}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {categories.map((item) => (
            <CategoryCard 
              category={item}
              key={'categoria-' + item.id}
              onPress={() => props.navigation.navigate("Category")}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
}
