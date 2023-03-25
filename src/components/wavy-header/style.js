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
    headerTitle: {
        ...Typography.FONT_SEMI_BOLD,
        fontSize: Typography.FONT_SIZE_18,
        lineHeight: Mixins.scaleSize(18),
        letterSpacing: Mixins.scaleSize(-0.28),
        color: Colors.WHITE_DEFAULT,
        marginBottom: Mixins.scaleSize(16),
        maxWidth: Mixins.scaleSize(174)        
    },
    searchBarContainer: {
        position: 'relative',
    },
    searchBar: {
        backgroundColor: Colors.WHITE_DEFAULT,
        height: Mixins.scaleSize(56),
        borderRadius: Mixins.scaleSize(8),
        padding: Mixins.scaleSize(16)
    },
    searchBtn: {
        position: 'absolute',
        right: Mixins.scaleSize(12),
        top: Mixins.scaleSize(11),
        backgroundColor: Colors.PRIMARY,
        height: Mixins.scaleSize(34),
        width: Mixins.scaleSize(34),
        borderRadius: Mixins.scaleSize(8),
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Style;