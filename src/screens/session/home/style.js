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
    categoryCard: {
        backgroundColor: Colors.PRIMARY_LIGHT,
        borderRadius: Mixins.scaleSize(12),
        flexDirection: 'row',
        alignItems: 'center',
        padding: Mixins.scaleSize(16),
        marginRight: Mixins.scaleSize(16)
        
    },
    categoryIconContainer: {
        height: Mixins.scaleSize(32),
        width: Mixins.scaleSize(32),
        backgroundColor: Colors.WHITE_DEFAULT,
        borderRadius: Mixins.scaleSize(8),
        justifyContent: 'center',
        alignContent: 'center'
    },
    categoriesListHeader: {
        ...Typography.FONT_BOLD,
        textAlign: 'left',
        width: '100%',
        paddingLeft: Mixins.scaleSize(24),
        marginTop: Mixins.scaleSize(32),
        marginBottom: Mixins.scaleSize(8),
        fontSize: Typography.FONT_SIZE_16
    },
    categoriesList: {
        paddingHorizontal: Mixins.scaleSize(24),
        width: Mixins.WINDOW_WIDTH,
        height: Mixins.scaleSize(100),
        flex: 0,
        maxHeight: Mixins.scaleSize(64),
        height: Mixins.scaleSize(64)
    }
});

export default Style;