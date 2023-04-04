import { Platform, StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

const Style = StyleSheet.create({
    notFoundContainer: {
        alignItems: 'center',
        marginTop: Mixins.scaleSize(32)
    },
    notFoundText: {
        ...Typography.FONT_BOLD,
        textAlign: 'center',
        marginTop: Mixins.scaleSize(18),
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.GRAY_DARK

    }
});

export default Style;