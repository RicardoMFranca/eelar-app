import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

const Style = StyleSheet.create({
    eventCard: {
        position: 'relative',
        marginRight: Mixins.scaleSize(16)
    },
    eventThumbnail: {
        height: Mixins.scaleSize(136),
        width: Mixins.scaleSize(200),
        borderRadius: Mixins.scaleSize(12),
        resizeMode: 'cover'
    },
    eventDate: {
        backgroundColor: Colors.WHITE_DEFAULT,
        height: Mixins.scaleSize(40),
        width: Mixins.scaleSize(40),
        borderRadius: Mixins.scaleSize(6),
        position: 'absolute',
        top: Mixins.scaleSize(8),
        right: Mixins.scaleSize(8),
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventInfoGradient: {
        height: Mixins.scaleSize(96),
    },
    linearGradientContainer: {
        height: Mixins.scaleSize(96),
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        width: '100%',
        borderRadius: Mixins.scaleSize(12),
        overflow: 'hidden',
        paddingHorizontal: Mixins.scaleSize(20),
        paddingBottom: Mixins.scaleSize(24)
    },
    eventCategory: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_12,
        color: Colors.WHITE_DEFAULT
    },
    eventName: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.WHITE_DEFAULT
    },
    eventMonth: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_10,
        color: Colors.rgba(Colors.BLACK_DEFAULT, 0.8),
    },
    eventDay: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.BLACK_DEFAULT,
        lineHeight: Mixins.scaleSize(14)
    }
});

export default Style;