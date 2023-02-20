import { StyleSheet } from 'react-native';
import { Colors, Mixins } from '../../styles';

const Style = StyleSheet.create({
    background: {
        position: 'absolute',
        width: '100%',
        height: Mixins.WINDOW_HEIGHT*0.8,
        top: Mixins.scaleSize(140), 
        backgroundColor: Colors.GRAY_3,
        zIndex: 19
    },
    loader: {
        zIndex: 20,
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default Style;