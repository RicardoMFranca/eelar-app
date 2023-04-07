import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  titleText: {
    ...Typography.FONT_SEMI_BOLD,
    fontSize: Typography.FONT_SIZE_32,
    textAlign: 'center',
    color: Colors.WHITE_DEFAULT
  },
  subtitleText: {
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    textAlign: 'center',
    color: Colors.WHITE_DEFAULT,
    marginBottom: Mixins.scaleSize(24),
    maxWidth: Mixins.scaleSize(295),
    marginHorizontal: 'auto'
  },
  initialBackground: {
    height: '100%',
    flex: 1,
    width: Mixins.WINDOW_WIDTH,
    position:'absolute',
    top: 0,
    resizeMode: 'cover'
  },
  initialImg: {
    marginTop: Mixins.scaleSize(86)
  }
});

export default Style;