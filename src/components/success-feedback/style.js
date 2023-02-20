import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../styles';

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: Mixins.scaleSize(24)
    },
    textBox: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: Mixins.scaleSize(20)
    },
    title: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_24,
        color: Colors.GRAY_DARKEST,
        marginBottom: Mixins.scaleSize(16),
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    desc: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.GRAY_DARKEST, 
        textAlign: 'center'       
    }
})