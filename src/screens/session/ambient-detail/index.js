import React, { useContext } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { GeneralStyles, Mixins, Colors } from '../../../styles';
import Style from './style';

import Carousel from 'react-native-reanimated-carousel';
import DefaultBtn from '../../../components/buttons/default-btn';
import GobackBtn from '../../../components/go-back-btn';

export default function AmbientDetailScreen(props){

  const progressValue = useSharedValue(0);

  const animationStyle = React.useCallback(
    (value) => {
      "worklet";

      const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
      const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
      const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

      return {
        transform: [{ scale }],
        zIndex,
        opacity,
      };
    },
    [],
  );

  const colors = [
    "#26292E",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#F5D399",
    "#F1F1F1",
  ];

  const PaginationItem = (props) => {
    const { animValue, index, length, backgroundColor, isRotate } = props;
    const width = 10;
  
    const animStyle = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [-width, 0, width];
  
      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
        outputRange = [-width, 0, width];
      }
  
      return {
        transform: [
          {
            translateX: interpolate(
              animValue?.value,
              inputRange,
              outputRange,
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }, [animValue, index, length]);
    return (
      <View
        style={Style.dotWrapper(width, isRotate)}
      >
        <Animated.View
          style={[
            {
              borderRadius: 50,
              backgroundColor,
              flex: 1,
            },
            animStyle,
          ]}
        />
      </View>
    );
  };

  const carousel = (
    <>
      <Carousel
        loop
        width={Mixins.WINDOW_WIDTH}
        height={Mixins.scaleSize(238)}
        customAnimation={animationStyle}
        autoPlay={false}
        pagingEnabled={true}
        snapEnabled={true}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={600}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <Image source={require('../../../assets/images/temp/parque-da-cidade-horizontal.png')} style={Style.carouselImage} />
        )}
      />
      <View style={Style.dotsContainer}>
        {colors.map((backgroundColor, index) => {
          return (
            <PaginationItem
              backgroundColor={Colors.PRIMARY}
              animValue={progressValue}
              index={index}
              key={index}
              length={colors.length}
              isRotate={false}
            />
          );
        })}
      </View>
    </>
  );

  const ambientInfoHorizontalCard = () => (
    <View style={Style.horizontalCard}>
      <View style={Style.iconContainer}>
        <Icon 
          style={Style.cardIcon} 
          name={'watch-later'} 
          size={Mixins.scaleSize(20)} 
          color={Colors.BLACK_DEFAULT} 
        />
      </View>
      <View>
        <Text style={Style.cardTitle}>Horário de funcionamento</Text>
        <Text style={Style.cardInfo}>09:00 às 20:00</Text>
      </View>
    </View>
  );

  return (
    <>
      <GobackBtn
        {...props}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: Mixins.scaleSize(64)}}
      >
        {carousel}
        <View style={Style.ambientInfoContainer}>
          <View style={Style.nameCategoryAlign}>
            <Text style={Style.ambientName}>Parque da cidade</Text>
            <View style={Style.category}>
              <Text style={Style.categoryLabel}>Parque</Text>
            </View>
          </View>
          <Text style={Style.ambientAddress}>Estr. da Viração - São Francisco</Text>
          <Text style={Style.ambientDescription}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Text>
          <Text style={[GeneralStyles.fonts.title, Style.titleSpacing]}>Informações do Local</Text>
          {ambientInfoHorizontalCard()}
          {ambientInfoHorizontalCard()}
          {ambientInfoHorizontalCard()}
        </View>
      </ScrollView>
      <View style={Style.mapsBtnContainer}>
        <DefaultBtn
          onPress={() => props.navigation.navigate("Login")}
          label='Abrir no Maps'
          customStyle={Style.mapsBtn}
          rightIcon={'location-pin'}
        />
      </View>
    </>
  );
}
