import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, Text, 
  TouchableOpacity, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';

import {staticAmbients, staticCategories} from '../../../util/static-data';
import { GeneralStyles } from '../../../styles';
import LoaderContext from '../../../contexts/loader';

import Style from './style';

import CategoryCard from '../../../components/category-card';
import AmbientCard from '../../../components/ambient-card';
import WavyHeader from '../../../components/wavy-header';
import NotFound from '../../../components/not-found';

export default function HomeScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [categories, setCategories] = useState([]);
  const [ambients, setAmbients] = useState([]);

  const [items, setItems] = useState([]);

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
    setCategories(staticCategories);
    setAmbients(staticAmbients);
    setItems(staticAmbients);
  };
  
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
      style={GeneralStyles.aligns.whiteBackground}
    >
      <WavyHeader
        {...props}
        setSearchedItems={setItems}
        data={ambients}
        logout
      />
      <SafeAreaView style={GeneralStyles.aligns.container}>
        <Animated.Text
          // entering={FadeInUp.duration(400).delay(400)}
          style={[GeneralStyles.aligns.sessionTitle, GeneralStyles.fonts.title]}
        >
          Categorias
        </Animated.Text>
        <ScrollView
          style={GeneralStyles.aligns.defaultList}
          contentContainerStyle={{paddingRight: 32}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {categories.map((item, index) => (
            <CategoryCard 
              cardIndex={index}
              category={item}
              onPress={() => props.navigation.navigate("Category", {category: item})}
              key={'categoria-' + item.id}
            />
          ))}
        </ScrollView>
        <View style={Style.selectedPlaces}>
          <Animated.Text 
            // entering={FadeInUp.duration(600).delay(200)}
            style={[GeneralStyles.aligns.sessionTitle, GeneralStyles.fonts.title]}
          >
            Espaços próximos de você
          </Animated.Text>
        </View>
        <ScrollView 
          style={GeneralStyles.aligns.defaultList}
          contentContainerStyle={{paddingRight: 32}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        >
          {
            items.length > 0 ?
              items.map((item) => (
                <AmbientCard 
                  ambient={item}
                  key={'ambiente-' + item.id}
                  onPress={() => props.navigation.navigate('AmbientDetail', {ambient: item})}
                />
              ))
              :
              <NotFound/>
          }
        </ScrollView>
        {availableEvents}
      </SafeAreaView>
    </ScrollView>
  );
}
