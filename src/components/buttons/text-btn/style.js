import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles'

const Style = StyleSheet.create({
  container: {
    marginTop: Mixins.scaleSize(24)
  },
  text: {
    color: Colors.BLACK_DEFAULT,
    ...Typography.FONT_MEDIUM,
    fontSize: Typography.FONT_SIZE_13,
    textAlign: 'right'
  }
});

export default Style;