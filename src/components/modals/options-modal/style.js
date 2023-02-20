import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
    optionsModalBackground: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: Mixins.WINDOW_HEIGHT,
        width: Mixins.WINDOW_HEIGHT,
        zIndex: 1,
    },
    optionsModalContainer: {
        position: 'absolute',
		right: Mixins.scaleSize(8),
		zIndex: 2,
        width: Mixins.scaleSize(177),
        borderRadius: Mixins.scaleSize(8),
        backgroundColor: Colors.WHITE_DEFAULT,
        ...Mixins.boxShadow(Colors.BLACK_DEFAULT),
        justifyContent: 'space-between',
    },
    optionsModalItem: {
        flexDirection: 'row',
        paddingVertical: Mixins.scaleSize(16)
    },
    optionsModalIcon: {
        marginLeft: Mixins.scaleSize(16),
        marginRight: Mixins.scaleSize(11)
    },
    optionsModalLabel: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_15,
        lineHeight: Mixins.scaleSize(18),
        color: Colors.BLACK_DEFAULT
    }
});

export default Style;