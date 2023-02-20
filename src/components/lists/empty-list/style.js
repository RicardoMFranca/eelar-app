import { StyleSheet } from 'react-native';
import { Typography, Mixins, Colors } from '../../../styles';

const Style = StyleSheet.create({
  container: {
    height:Mixins.WINDOW_HEIGHT*0.8,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    ...Typography.FONT_2_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_20,
    lineHeight: Typography.LINE_HEIGHT_24,
    textAlign: 'center',
    color: Colors.BRANDCOLOR_ROXO,
    marginBottom: Mixins.scaleSize(8)
  },
  subTitle: {
    ...Typography.FONT_2_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
    lineHeight: Typography.LINE_HEIGHT_17,
    textAlign: 'center',
    color: Colors.BRANDCOLOR_ROXO,
    marginBottom: Mixins.scaleSize(16)
  }
});

export default Style;