import { StyleSheet } from 'react-native';
import { Typography, Mixins, Colors } from '../../styles';

const Style = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Mixins.scaleSize(48)
    },
    label: {
        ...Typography.FONT_REGULAR,
        fontSize: Mixins.scaleSize(16),
        lineHeight: Mixins.scaleSize(19),
        color: Colors.BLACK_DEFAULT
    },
});

export default Style;