import React from 'react';
import Style from './style';
import { View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native'
import { Colors, Mixins } from '../../styles';

export default function LoaderContent(props){
  const { visivel } = props;
  
  let custom_container = (x, y) => {
    return (
      <>
        <Rect x={x} y={y} rx="0" ry="0" width="100" height="100" /> 

        <Rect x={x+115} y={y+4} rx="4" ry="4" width="300" height="20" />
        <Rect x={x+115} y={y+31} rx="3" ry="3" width="160" height="20" />
        <Rect x={x+115} y={y+64} rx="3" ry="3" width="140" height="20" />
        <Rect x={x+275} y={y+64} rx="3" ry="3" width="70" height="20" />

        <Rect x={x} y={y+124} rx="3" ry="3" width="410" height="1" />
      </>
    )
  }
  
  let loader = (
    <View style={Style.background}>
      <View style={Style.loader}>
        <ContentLoader 
          width={Mixins.WINDOW_WIDTH*0.9}
          height={Mixins.WINDOW_HEIGHT*0.9}
          speed={1}
          backgroundColor={Colors.WHITE_DEFAULT}
        >
          {custom_container(5, 10)}
          {custom_container(5, 10+1*150)}
          {custom_container(5, 10+2*150)}
          {custom_container(5, 10+3*150)}
          {custom_container(5, 10+4*150)}
          {custom_container(5, 10+5*150)}
        </ContentLoader>
      </View>
    </View>
  );

  return visivel && loader;
}
