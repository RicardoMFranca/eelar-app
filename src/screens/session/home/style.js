import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

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
    homeTitle: {
        textAlign: 'left',
        paddingLeft: Mixins.scaleSize(24),
        marginTop: Mixins.scaleSize(32),
        marginBottom: Mixins.scaleSize(16),
    },
    homeList: {
        paddingHorizontal: Mixins.scaleSize(24),
        flex: 0,
        flexGrow: 0,
    },
    selectedPlaces: {
        width: '100%',
    },
    availableEventsContainer: {
        borderRadius: Mixins.scaleSize(24),
        paddingVertical: Mixins.scaleSize(40),
        paddingLeft: Mixins.scaleSize(16),
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
        marginTop: Mixins.scaleSize(32),
    },
    eventsImage: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    eventCardTitle: {
        color: Colors.WHITE_DEFAULT,
        fontSize: Typography.FONT_SIZE_16,
        fontWeight: 'bold',
    },
    eventCardBtn: {
        borderRadius: Mixins.scaleSize(8),
        backgroundColor: Colors.PRIMARY_MEDIUM,
        width: Mixins.scaleSize(116),
        height: Mixins.scaleSize(36),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Mixins.scaleSize(16)
    },
    eventCardBtnLabel: {
        ...Typography.FONT_MEDIUM,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.WHITE_DEFAULT,
    }
});

export default Style;