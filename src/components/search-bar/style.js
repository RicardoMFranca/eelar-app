import { Platform, StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

const Style = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		paddingHorizontal: Mixins.scaleSize(20),
		alignItems: 'center',
		backgroundColor: Colors.WHITE_DEFAULT,
		paddingTop: Platform.OS == 'ios' ? Mixins.scaleSize(30) : null
	},
	containerIOS: {
		paddingVertical: Mixins.scaleSize(12)
	},
	isTyping: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
		flex: 1,
		paddingHorizontal: Mixins.scaleSize(12),
		borderRadius: Mixins.scaleSize(4),
		position: 'relative'
	},

	inputIcon: {
		position: 'absolute',
		left: Mixins.scaleSize(12),
		zIndex: 2
	},
	inputField: {
		flex: 1,
		color: Colors.GRAY_LIGHT_3,
		fontSize: Typography.FONT_SIZE_14,
		...Typography.FONT_REGULAR,
		paddingLeft: Mixins.scaleSize(32)
	},
	cancelBtnTxt: {
		color: Colors.BRANDCOLOR_NEUTRAL,
		alignItems: 'center',
		marginLeft: Mixins.scaleSize(12),
		fontSize: Typography.FONT_SIZE_14,
		...Typography.FONT_MEDIUM,
	}
});

export default Style;