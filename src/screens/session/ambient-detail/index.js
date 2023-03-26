import React, { useState, useEffect, useContext } from 'react';
import { Image, ScrollView, Text, View, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GeneralStyles, Mixins } from '../../../styles';
import Style from './style';

import LoaderContext from '../../../contexts/loader';

import CategoryCard from '../../../components/category-card';
import WavyHeader from '../../../components/wavy-header';
import EventCard from '../../../components/event-card';

export default function AmbientDetailScreen(props){
  const { setLoading } = useContext(LoaderContext);

  const [refreshing, setRefreshing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [events, setEvents] = useState([]);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Image source={require('../../../assets/images/temp/parque-da-cidade.png')} style={Style.carouselImage} />
    </ScrollView>
  );
}
