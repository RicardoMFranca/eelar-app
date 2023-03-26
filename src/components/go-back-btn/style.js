import { StyleSheet } from 'react-native';
import { Mixins } from '../../styles';

const Style = StyleSheet.create({
    goBackBtn: {
        position: 'absolute',
        top: Mixins.scaleSize(48),
        zIndex: 3,
        left: Mixins.scaleSize(24)
    }
});

export default Style;