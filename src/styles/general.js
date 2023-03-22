import { StyleSheet } from 'react-native';
import * as Colors from './colors';
import * as Typography from './typography';
import * as Mixins from './mixins';

export const header = StyleSheet.create({
    align: (statusBarHeight) => ({
        width: Mixins.WINDOW_WIDTH,
        flexDirection: 'row',
        justifyContent:'center', 
        alignItems:'center',
        marginTop: statusBarHeight
    }),
    text: {
        color: Colors.BLACK,
        fontSize: Typography.FONT_SIZE_13,
        ...Typography.FONT_MEDIUM,
    },
    imageBackground: (background) => ({
        width: Mixins.WINDOW_WIDTH,
        height: '100%',
        position: background ? background : `absolute`,
        top: Mixins.scaleSize(0),
        resizeMode: 'stretch'
    }),
    headerContainer: (height) => ({
        marginBottom: Mixins.scaleSize(24),
        position: 'relative',
        height: Mixins.scaleSize(height),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Mixins.scaleSize(16)
    }),
});