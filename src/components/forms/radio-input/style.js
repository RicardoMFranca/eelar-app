import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
	radioInputContainer: {
		width: '100%',
		marginTop: Mixins.scaleSize(24)
	},
	radioInputBtn: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: Mixins.scaleSize(8)
	},
	radioInputCircleSelected: {
		height: Mixins.scaleSize(24),
		width: Mixins.scaleSize(24),
		borderRadius: Mixins.scaleSize(12),
		backgroundColor: Colors.PRIMARY,
		justifyContent: 'center',
		alignItems: 'center'
	},
	radioInputCircle: {
		height: Mixins.scaleSize(24),
		width: Mixins.scaleSize(24),
		borderRadius: Mixins.scaleSize(12),
		borderWidth: Mixins.scaleSize(1),
		borderColor: Colors.GRAY_MEDIUM
	},
	radioInputCircleInside: {
		height: Mixins.scaleSize(12),
		width: Mixins.scaleSize(12),
		borderRadius: Mixins.scaleSize(6),
		backgroundColor: Colors.GRAY_LIGHTEST
	},
	radioInputLabel: {
		...Typography.FONT_REGULAR,
		fontSize: Typography.FONT_SIZE_16,
		lineHeight: Mixins.scaleSize(22),
		color: Colors.GRAY_DARK,
		marginLeft: Mixins.scaleSize(8)
	}
});

export default Style;