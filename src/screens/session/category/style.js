import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
    categoryHeader: {
        height: Mixins.scaleSize(236),
        width: Mixins.WINDOW_WIDTH,
        borderRadius: Mixins.scaleSize(24),
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        position: 'relative',
        justifyContent: 'center',
        zIndex: 2
    },
    searchBarContainer: {
        width: Mixins.WINDOW_WIDTH - Mixins.scaleSize(48),
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: Mixins.scaleSize(-24),
        left: Mixins.scaleSize(24),
        borderRadius: Mixins.scaleSize(8),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    currentCategoryContainer: {
        maxWidth: Mixins.scaleSize(136),
        marginLeft: Mixins.scaleSize(24),
        marginTop: Mixins.scaleSize(16)
    },
    currentCategoryLabel: {
        ...Typography.FONT_SEMI_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.WHITE_DEFAULT
    },
    currentCategory: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_18,
        color: Colors.WHITE_DEFAULT
    },
    categoryHeaderImage: {
        position: 'absolute',
        right: 0,
        bottom: Mixins.scaleSize(32)
    },
    listContainer: {
        width: Mixins.WINDOW_WIDTH - Mixins.scaleSize(48),
        paddingTop: Mixins.scaleSize(32),
    },
    ambientCardWrapper: {
        flex: 1,
    },
    ambientCardWrapperRight: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    ambientCardWrapperLeft: {
        position: 'relative',
        bottom: Mixins.scaleSize(124)
    },
    verticalListCard: {
        width: Mixins.WINDOW_WIDTH/2 - Mixins.scaleSize(32),
        marginRight: 0,
        marginTop: Mixins.scaleSize(24),
    },
    nearbyEventsCard: {
        height: Mixins.scaleSize(100),
        width: Mixins.WINDOW_WIDTH/2 - Mixins.scaleSize(32),
        backgroundColor: Colors.PRIMARY,
        position: 'relative',
        borderRadius: Mixins.scaleSize(12),
        justifyContent: 'center',
        paddingLeft: Mixins.scaleSize(10),
        zIndex: 4
    },
    nearbyEventsCardContainer: {
        position: 'relative',
        marginTop: Mixins.scaleSize(24),
    },
    nearbyEventsTitle: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_15,
        color: Colors.WHITE_DEFAULT,
    },
    nearbyEventsSubtitle: {
        ...Typography.FONT_MEDIUM,
        fontSize: Typography.FONT_SIZE_12,
        color: Colors.rgba(Colors.WHITE_DEFAULT, 0.8),
        maxWidth: Mixins.scaleSize(118)
    },
    backgroundSquare: (isLastBackGroundSquare) => ({
        position: 'absolute',
        top: Mixins.scaleSize(isLastBackGroundSquare ? 8 : 4),
        left: Mixins.scaleSize(isLastBackGroundSquare ? 16 : 8),
        width: Mixins.WINDOW_WIDTH/2 - Mixins.scaleSize(isLastBackGroundSquare ? 68 : 48),
        height: Mixins.scaleSize(100),
        backgroundColor: 'yellow',
        zIndex: isLastBackGroundSquare ? 2 : 3,
        backgroundColor: Colors.rgba(Colors.PRIMARY, isLastBackGroundSquare ? 0.4 : 0.8),
        borderRadius: Mixins.scaleSize(12)
    })
});

export default Style;