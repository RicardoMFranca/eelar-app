import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../../styles';

const Style = StyleSheet.create({
    regularFont: {
        ...Typography.FONT_REGULAR,
        color: Colors.rgba(Colors.WHITE_DEFAULT, 0.8)
    },
    eventDate: {
        backgroundColor: Colors.WHITE_DEFAULT,
        height: Mixins.scaleSize(40),
        width: Mixins.scaleSize(40),
        borderRadius: Mixins.scaleSize(6),
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Mixins.scaleSize(16)
    },
    eventInfoAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventThumbnail: {
        width: Mixins.WINDOW_WIDTH,
        flex: 1,
        resizeMode: 'cover',
    },
    thumbnailContainer:{
        flex: 1,
        position: 'relative',
    },
    eventInfoContainer: {
        backgroundColor: Colors.BLACK_DEFAULT,
        paddingHorizontal: Mixins.scaleSize(24),
        flexGrow: 1,
    },
    linearGradientContainer: {
        position: 'absolute',
        left: 0,
        width: Mixins.WINDOW_WIDTH,
        bottom: 0,
        zIndex: 3,
    },
    linearGradient: {
        height: Mixins.scaleSize(80),
        width: Mixins.WINDOW_WIDTH,
        zIndex: 3
    },
    eventName: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_24,
        color: Colors.WHITE_DEFAULT
    },
    eventDescription: {
        fontSize: Typography.FONT_SIZE_14,
        marginTop: Mixins.scaleSize(16),
        marginBottom: Mixins.scaleSize(100),
        lineHeight: Mixins.scaleSize(17)
    },
    eventTime: {
        fontSize: Typography.FONT_SIZE_12,
        marginLeft: Mixins.scaleSize(4)
    },
    eventTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Mixins.scaleSize(4)
    },
    mapsBtn: {
        backgroundColor: Colors.WHITE_DEFAULT,
    },
    mapsBtnContainer: {
        backgroundColor: Colors.BLACK_DEFAULT, 
        position: 'absolute', 
        bottom: Mixins.scaleSize(0), 
        width: Mixins.WINDOW_WIDTH, 
        height: Mixins.scaleSize(80),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Mixins.scaleSize(24)
    },
});

export default Style;