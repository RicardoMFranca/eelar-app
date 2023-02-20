import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  instructionsText: {
    ...Typography.FONT_MEDIUM,
    fontWeight: '600',
    marginTop: Mixins.scaleSize(46),
    marginBottom: Mixins.scaleSize(16),
    fontSize: Typography.FONT_SIZE_24
  },
  instructionsDesc: {
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_15,
    color: Colors.BLACK_DEFAULT,
    opacity: 0.8
  }
});

export default Style;