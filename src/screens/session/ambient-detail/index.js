import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { GeneralStyles, Mixins, Colors } from '../../../styles';
import Style from './style';

import Carousel from 'react-native-reanimated-carousel';
import DefaultBtn from '../../../components/buttons/default-btn';
import GobackBtn from '../../../components/go-back-btn';
import { goToMaps } from '../../../util/helpers';

export default function AmbientDetailScreen(props){
  const [ambient, setAmbient] = useState({});
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

  useEffect(() => {
    const ambient = props?.route?.params?.ambient;
    setAmbient(ambient);
  }, [])
  
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
        data={ambient?.fotos}
        scrollAnimationDuration={600}
        renderItem={({ item, index }) => (
          <Image source={item} style={Style.carouselImage} />
        )}
      />
      <View style={Style.dotsContainer}>
        {ambient?.fotos?.map((backgroundColor, index) => {
          return (
            <PaginationItem
              backgroundColor={Colors.PRIMARY}
              animValue={progressValue}
              index={index}
              key={index}
              length={ambient?.fotos?.length}
              isRotate={false}
            />
          );
        })}
      </View>
    </>
  );

  const ambientInfoHorizontalCard = (info) => (
    <View style={Style.horizontalCard} key={`info-${info.id}`}>
      <View style={Style.iconContainer}>
        <Icon 
          style={Style.cardIcon} 
          name={info.nome_icone ? info.nome_icone : 'info-outline'} 
          size={Mixins.scaleSize(20)} 
          color={Colors.BLACK_DEFAULT} 
        />
      </View>
      <View>
        <Text style={Style.cardTitle}>{info.titulo}</Text>
        <Text style={Style.cardInfo}>{info.descricao}</Text>
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
        style={GeneralStyles.aligns.whiteBackground}
      >
        {carousel}
        <View style={Style.ambientInfoContainer}>
          <View style={Style.nameCategoryAlign}>
            <Text style={Style.ambientName}>{ambient?.nome}</Text>
            {ambient?.categorias?.length > 0 && 
              ambient.categorias.map((category) => (
                <View style={Style.category} key={`categoria-${category.id}`}>
                  <Text style={Style.categoryLabel}>{category.nome}</Text>
                </View>
              ))
            }
          </View>
          <Text style={Style.ambientAddress}>{ambient?.endereco}</Text>
          <Text style={Style.ambientDescription}>{ambient?.descricao}</Text>
          <Text style={[GeneralStyles.fonts.title, Style.titleSpacing]}>Informações do Local</Text>
          {ambient?.informacoes?.length > 0 &&
            ambient.informacoes.map((info) => (
              ambientInfoHorizontalCard(info)
            ))
          }
        </View>
      </ScrollView>
      <View style={Style.mapsBtnContainer}>
        <DefaultBtn
          onPress={() => goToMaps(ambient?.endereco)}
          label='Abrir no Maps'
          customStyle={Style.mapsBtn}
          rightIcon={'location-pin'}
        />
      </View>
    </>
  );
}
