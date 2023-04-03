import { Platform, StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

const Style = StyleSheet.create({
    categoryCard: {
        backgroundColor: Colors.PRIMARY_LIGHT,
        borderRadius: Mixins.scaleSize(12),
        flexDirection: 'row',
        alignItems: 'center',
        padding: Mixins.scaleSize(16),
        marginRight: Mixins.scaleSize(16),
		width: Mixins.scaleSize(124),
    },
    categoryIconContainer: {
        height: Mixins.scaleSize(32),
        width: Mixins.scaleSize(32),
        backgroundColor: Colors.WHITE_DEFAULT,
        borderRadius: Mixins.scaleSize(8),
        justifyContent: 'center',
        alignItems: 'center',
		marginRight: Mixins.scaleSize(8)
    },
	categoryName: {
		...Typography.FONT_SEMI_BOLD,
		color: Colors.WHITE_DEFAULT,
        flex: 1
	}
});

export default Style;