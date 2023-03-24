import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    loader: {
        position: 'absolute',
        zIndex: 20,
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        zIndex: 19
    }
});

export default Style;