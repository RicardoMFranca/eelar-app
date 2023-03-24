import { StyleSheet } from 'react-native';
import * as Colors from './colors';
import * as Typography from './typography';
import * as Mixins from './mixins';

export const aligns = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    width40: {
        width: Mixins.WINDOW_WIDTH - Mixins.scaleSize(80)
    },
    width32: {
        width: Mixins.WINDOW_WIDTH - Mixins.scaleSize(64)
    },
    width24: {
        width: Mixins.WINDOW_WIDTH - Mixins.scaleSize(48)
    },
    topCenter: {
        position: 'absolute',
        bottom: '70%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginTop: Mixins.scaleSize(50)
    },
    content: {
        marginTop: Mixins.scaleSize(10),
        width: '90%',
    }
});

export const forms = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    }, 
    label: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.BLACK_DEFAULT,
        marginVertical: Mixins.scaleSize(10),
    },
    input: {
        fontSize: Typography.FONT_SIZE_28,
        color: Colors.BLACK_DEFAULT,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: Colors.WHITE_DEFAULT,
        borderWidth: Mixins.scaleSize(1),
        borderColor: Colors.BLACK_TONE_1,
        borderRadius: Mixins.scaleSize(8)
    },
}); 