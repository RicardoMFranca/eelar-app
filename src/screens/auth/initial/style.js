import { Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.PRIMARY,
    flex: 1
  },
  background: {
    ...StyleSheet.absoluteFill,
    width: Mixins.WINDOW_WIDTH,
    height: Mixins.WINDOW_HEIGHT + Platform.OS == 'android' ? getStatusBarHeight() : 0,
    zIndex: -1
  },
  container: {
    height: Mixins.WINDOW_HEIGHT,
    position: 'relative'
  },  
  logo:{
    marginTop: Mixins.scaleSize(32),
    alignSelf: 'center',
    height: Mixins.scaleSize(27),
    width: Mixins.scaleSize(143),
    marginBottom: Mixins.scaleSize(8)
  },
  radialBackground: {
    position: 'absolute',
    opacity: 0.5
  },
  title: {
    ...Typography.FONT_SEMI_BOLD_2,
    textAlign: 'center',
    fontSize: Mixins.scaleSize(34),
    color: Colors.BLACK,
    marginBottom: Mixins.scaleSize(16)
  },
  subtitle: {
    ...Typography.FONT_REGULAR,
    textAlign: 'center',
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.BLACK,
  },
  centeredImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  initialPicture: {
    width: Mixins.scaleSize(351),
    height: Mixins.scaleSize(330),
    resizeMode: 'contain',
    marginBottom: Mixins.scaleSize(8)
  },
  bottomContent: {
    flex: 1
  },
  registerOptionModalContent: {
    alignItems: 'center',
    marginBottom: Mixins.scaleSize(50),
    paddingHorizontal: Mixins.scaleSize(32)
  },
  modalTitle: {
    ...Typography.FONT_MEDIUM_2,
    fontSize: Typography.FONT_SIZE_24,
    color: Colors.GRAY_DARK,
    marginBottom: Mixins.scaleSize(16),
    textAlign: 'center'
  },
  modalSubTitle: {
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.GRAY_MEDIUM,
    marginBottom: Mixins.scaleSize(54),
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalBtns: {
    width: '50%',
  }
});

export default Style;