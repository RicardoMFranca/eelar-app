import { Platform, StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

const Style = StyleSheet.create({
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