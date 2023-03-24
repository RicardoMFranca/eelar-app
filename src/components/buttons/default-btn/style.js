import { StyleSheet } from 'react-native';
import { Mixins, Typography } from '../../../styles'

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Mixins.scaleSize(50),
    borderRadius: Mixins.scaleSize(24),
  },
  text: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_15,
    lineHeight: Mixins.scaleSize(25),
  }
});

export default Style;