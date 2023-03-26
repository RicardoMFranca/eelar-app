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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    defaultList: {
        paddingHorizontal: Mixins.scaleSize(24),
        flex: 0,
        flexGrow: 0,
    },
    sessionTitle: {
        textAlign: 'left',
        paddingLeft: Mixins.scaleSize(24),
        marginTop: Mixins.scaleSize(32),
        marginBottom: Mixins.scaleSize(16),
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
    }
}); 

export const fonts = StyleSheet.create({
    title: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.BLACK_DEFAULT,
        width: '100%',
        textAlign: 'left',
    }
}); 