import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
	defaultInputAlignIconInput: {
    position: 'relative'
  },
	defaultInputLeftIcon: {
		position: 'absolute',
		top: Mixins.scaleSize(12),
		left: Mixins.scaleSize(8),
		zIndex: 2
	},
	defaultInputAlignLabel: (isFocused) => ({
		marginBottom: Mixins.scaleSize(4),
		marginTop: Mixins.scaleSize(16),
		color: isFocused ? Colors.PRIMARY : Colors.GRAY_DARK
	}),
	defaultInputBtnIcon: {
		position: 'absolute',
		top: Mixins.scaleSize(12),
		right: Mixins.scaleSize(12),
		zIndex: 2
	},
	defaultInputContainer: (isFocused, leftIconName, editable) => ({
		...Typography.FONT_REGULAR,
		fontSize: Typography.FONT_SIZE_15,
		width: '100%',
		height: Mixins.scaleSize(48),
		borderWidth: Mixins.scaleSize(1),
		borderRadius: Mixins.scaleSize(24),
		paddingRight: Mixins.scaleSize(16),
		alignSelf: 'center',
		color: Colors.GRAY_DARK,
		paddingLeft: leftIconName ? Mixins.scaleSize(40) : Mixins.scaleSize(16),
		borderColor: editable != false ? (isFocused ? Colors.PRIMARY : Colors.GRAY_MEDIUM) : Colors.GRAY_LIGHT,
		backgroundColor: editable != false ? (isFocused ? Colors.rgba(Colors.PRIMARY, 0.08) : 'transparent') : Colors.GRAY_LIGHT
		// editable != false existe para poder aceitar false e null
	}),
	defaultInputError: {
		color: Colors.ALERT_MEDIUM, 
		marginTop: Mixins.scaleSize(4)
	}
});

export default Style;