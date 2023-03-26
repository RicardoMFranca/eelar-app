import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  keyboardAwareContainer: {
    backgroundColor: Colors.PRIMARY,
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center'
  },
  loginTitle: {
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_15,
    color: Colors.BLACK_DEFAULT,
    width: '100%',
    marginVertical: Mixins.scaleSize(24),
    marginTop: Mixins.scaleSize(56),
    textAlign: 'center'
  },
  loginImg: {
    width: Mixins.WINDOW_WIDTH,
    resizeMode: 'contain',
  },
  registerBtn: {
    textAlign: 'center',
    marginTop: Mixins.scaleSize(32),
    marginBottom: Mixins.scaleSize(64),
    color: Colors.BLACK_DEFAULT,
    fontSize: Typography.FONT_SIZE_12
  },
  registerBtnBold: {
    fontWeight: 'bold'
  },
  loginBlob2: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  loginBlob1: {
    position: 'absolute',
    top: 0,
    left: 0
  },
});

export default Style;