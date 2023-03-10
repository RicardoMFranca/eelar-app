import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({

    registerContainer: {
        flex: 1,
        alignItems: 'center'
    },
    registerTitle: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_15,
        color: Colors.BLACK_DEFAULT,
        width: '100%',
        marginVertical: Mixins.scaleSize(24),
        textAlign: 'center'
    },
    registerImg: {
        width: Mixins.WINDOW_WIDTH,
        resizeMode: 'contain',
        marginTop: Mixins.scaleSize(56)
    },
    registerBtn: {
        textAlign: 'center',
        marginTop: Mixins.scaleSize(32)
    },
    registerBtnBold: {
        fontWeight: 'bold'
    },
    registerBlob1: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    registerBlob2: {
        position: 'absolute',
        left: 0,
        bottom: 0
    }
});

export default Style;