import { StyleSheet } from 'react-native';
import { Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  rightAction: {
    position: 'absolute',
    right: Mixins.scaleSize(16)
  },
  underTitle: {
    marginTop: Mixins.scaleSize(70),
    textAlign:'center',
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_24,
    lineHeight: Mixins.scaleSize(38),
  },
});

export default Style;