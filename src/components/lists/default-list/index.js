import React from 'react';
import { FlatList, View } from 'react-native';

import { GeneralStyles } from '../../../styles';
import Style from './style';

export default function DefaultList(props){
  const { data, refreshing, onRefresh, ListHeaderComponent, 
    ListFooterComponent, stickyHeaderIndices, renderItem, horizontal, customStyle } = props;

  return (
    <View style={Style.container}>
      <FlatList
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        stickyHeaderIndices={stickyHeaderIndices}
        horizontal={horizontal}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={[GeneralStyles.aligns.content, Style.listContainer, customStyle]}
        keyExtractor={(item) => `${item?.id}`}
        renderItem={({item}) => renderItem(item)}
      /> 
    </View>
  );
}
