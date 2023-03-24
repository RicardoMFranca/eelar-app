import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
	selectInputAlignLabel: {
		marginBottom: Mixins.scaleSize(4),
		marginTop: Mixins.scaleSize(16),
	},
	selectInputContainer: {
		
	},
	selectInput: {
		width: '100%',
		height: Mixins.scaleSize(48),
		borderWidth: Mixins.scaleSize(1),
		borderRadius: Mixins.scaleSize(4),
		borderColor: Colors.GRAY_MEDIUM,
		paddingHorizontal: Mixins.scaleSize(16),
		backgroundColor: Colors.GRAY_LIGHTEST
	},
	selectInputItem: {
		marginLeft: Mixins.scaleSize(16)
	},
	selectInputPicker: {
		backgroundColor: Colors.GRAY_LIGHTEST,
	},
	selectInputPlaceholder: {
		...Typography.FONT_REGULAR,
		fontSize: Typography.FONT_SIZE_16,
		lineHeight: Mixins.scaleSize(22),
		color: Colors.GRAY_MEDIUM
	}
});

export default Style;