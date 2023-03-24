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
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: Mixins.scaleSize(12),
        resizeMode: 'cover',
    },
    ambientInfoGradient: {
        width: '100%',
        height: Mixins.scaleSize(116),
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
        borderBottomEndRadius: Mixins.scaleSize(12),
        borderBottomStartRadius: Mixins.scaleSize(12),
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    }
});

export default Style;