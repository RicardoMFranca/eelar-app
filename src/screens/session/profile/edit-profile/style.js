import { StyleSheet } from 'react-native';
import { Mixins } from '../../../../styles';

const Style = StyleSheet.create({
  customContainer: {
    width:Mixins.WINDOW_WIDTH*0.8,
    flexDirection:'row',
    justifyContent:'center'
  },

  profilePicture:{
    height:Mixins.scaleSize(80),
    width:Mixins.scaleSize(80),
    marginBottom:Mixins.scaleSize(12),
    borderRadius: Mixins.scaleSize(40)
  },
});

export default Style;