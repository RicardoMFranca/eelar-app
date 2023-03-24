import React from "react";
import Style from './style';
import { View } from "react-native";
import TopTabBtn from "../../buttons/top-tab-btn";
import { Mixins } from "../../../styles";

export default function CustomTopTab(props){
  const { buttons, showMarketTab } = props;

  return ( 
    <View style={[Style.container, showMarketTab? Style.showMarketTabContainer : null]}>
      {buttons?.map((btn) => {
        return (
          <TopTabBtn
            showMarketTab={showMarketTab}
            label={btn.label}
            onPress={btn.onPress}
            selected={btn.selected}
            width={buttons?.length > 0 ? Mixins.WINDOW_WIDTH/buttons.length : null}
          />
        );
      })}
    </View>
  );
}