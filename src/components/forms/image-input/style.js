import { StyleSheet } from 'react-native';
import { Mixins } from '../../../styles';

const Style = StyleSheet.create({
	changeImageContainer: {
		flexDirection: 'row',
		marginTop: Mixins.scaleSize(24),
		marginBottom: Mixins.scaleSize(16),
		alignItems: 'center'
	}, 
	changeImage: {
		width: Mixins.scaleSize(80),
		height: Mixins.scaleSize(80),
		borderRadius: Mixins.scaleSize(40),
		resizeMode: 'cover',
		marginRight: Mixins.scaleSize(16)
	}
});

export default Style;