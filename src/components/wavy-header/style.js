import { Platform, StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

const Style = StyleSheet.create({
    wavyHeader: {
        position: 'relative',
        height: Mixins.scaleSize(284),
    },
    waveBackground: {
        position: 'absolute',
        width: Mixins.WINDOW_WIDTH,
        height: Mixins.scaleSize(284),
        resizeMode: 'stretch'
    },
    headerContiner: {
        paddingHorizontal: Mixins.scaleSize(24),
        marginTop: Mixins.scaleSize(84)
    },
    headerTitle: (withGoBackBtn) => ({
        ...Typography.FONT_SEMI_BOLD,
        fontSize: Typography.FONT_SIZE_18,
        lineHeight: Mixins.scaleSize(24),
        letterSpacing: Mixins.scaleSize(-0.28),
        color: Colors.WHITE_DEFAULT,
        marginBottom: Mixins.scaleSize(16),
        marginTop: withGoBackBtn ? Mixins.scaleSize(16) : 0  
    }),
});

export default Style;