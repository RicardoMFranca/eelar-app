import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
    recommendationBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Mixins.scaleSize(16),
        paddingTop: Mixins.scaleSize(24),
        borderRadius: Mixins.scaleSize(24),
        marginTop: Mixins.scaleSize(32)
    },
    recommendationBannerImage: {
        height: Mixins.scaleSize(94),
    },
    selectedPlacesTitle: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.WHITE_DEFAULT,
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
        lineHeight: Mixins.scaleSize(21),
        maxWidth: Mixins.scaleSize(182),
        marginLeft: Mixins.scaleSize(8)
    },
});

export default Style;