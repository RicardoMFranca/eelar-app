import { StyleSheet } from 'react-native';
import { Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  container: {
    position: 'absolute',
    left: Mixins.scaleSize(16),
    zIndex: 2,
    elevation: 16,
  },
  actionText: {
    ...Typography.FONT_REGULAR,
  }
});

export default Style;