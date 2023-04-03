import { Platform, StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

const Style = StyleSheet.create({
    ambientCard: {
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(230),
        position: 'relative',
        marginRight: Mixins.scaleSize(24),
        borderRadius: Mixins.scaleSize(12),
    },
    ambientThumbNail: {
        width: '100%',
        height: Mixins.scaleSize(230),
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: Mixins.scaleSize(12),
        resizeMode: 'cover',
    },
    ambientInfoGradient: {
        width: '100%',
        height: Mixins.scaleSize(156),
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        borderBottomEndRadius: Mixins.scaleSize(12),
        borderBottomStartRadius: Mixins.scaleSize(12),
        borderRadius: Mixins.scaleSize(12),
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: Mixins.scaleSize(16),
        paddingBottom: Mixins.scaleSize(24),
    },
    ambientName: {
        ...Typography.FONT_BOLD,
        color: Colors.WHITE_DEFAULT,
        fontSize: Typography.FONT_SIZE_18,
    },
    ambientAddress: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.rgba(Colors.WHITE_DEFAULT, 0.8)
    }
});

export default Style;