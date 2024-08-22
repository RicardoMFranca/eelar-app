import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
    carouselImage: {
        width: Mixins.WINDOW_WIDTH,
        height: Mixins.scaleSize(238),
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dotWrapper: (width, isRotate) => ({
        backgroundColor: "white",
        width: width,
        height: width,
        borderRadius: 50,
        backgroundColor: Colors.GRAY_LIGHTEST,
        overflow: "hidden",
        flexDirection: "row",
        transform: [
          {
            rotateZ: isRotate ? "90deg" : "0deg",
          },
        ],
        marginHorizontal: Mixins.scaleSize(4),
        marginTop: Mixins.scaleSize(10)
    }),
    nameCategoryAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Mixins.scaleSize(32)
    },
    ambientAddress: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_12,
        marginTop: Mixins.scaleSize(4),
        color: Colors.rgba(Colors.BLACK_DEFAULT, 0.8)
    },
    ambientName: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.BLACK_DEFAULT,
        maxWidth: Mixins.scaleSize(280)
    },
    category: {
        paddingHorizontal: Mixins.scaleSize(12),
        paddingVertical: Mixins.scaleSize(5),
        backgroundColor: Colors.PRIMARY,
        borderRadius: Mixins.scaleSize(4),
        marginLeft: Mixins.scaleSize(8)
    },
    categoryLabel: {
        ...Typography.FONT_MEDIUM,
        fontSize: Mixins.scaleSize(8),
        color: Colors.WHITE_DEFAULT,
    },
    ambientInfoContainer: {
        paddingHorizontal: Mixins.scaleSize(16)
    },
    ambientDescription: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.BLACK_DEFAULT,
        marginTop: Mixins.scaleSize(16),
        lineHeight: Mixins.scaleSize(20)
    },
    titleSpacing: {
        marginVertical: Mixins.scaleSize(24),
        marginBottom: Mixins.scaleSize(8)
    },
    horizontalCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Mixins.scaleSize(16),
        borderBottomWidth: Mixins.scaleSize(1),
        borderColor: Colors.rgba(Colors.BLACK_DEFAULT, 0.1),
        paddingHorizontal: Mixins.scaleSize(16),
        flex: 1
    },
    iconContainer: {
        height: Mixins.scaleSize(32),
        width: Mixins.scaleSize(32),
        borderRadius: Mixins.scaleSize(20),
        borderWidth: 1,
        borderColor: Colors.rgba(Colors.BLACK_DEFAULT, 0.1),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Mixins.scaleSize(8)
    },
    cardTitle: {
        ...Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.BLACK_DEFAULT,
        width: Mixins.WINDOW_WIDTH - Mixins.scaleSize(80)
    },
    cardInfo: {
        ...Typography.FONT_REGULAR,
        fontSize: Typography.FONT_SIZE_12,
        marginTop: Mixins.scaleSize(4),
        color: Colors.rgba(Colors.BLACK_DEFAULT, 0.8)
    },
    mapsBtn: {
        backgroundColor: Colors.PRIMARY,
    },
    mapsBtnContainer: {
        backgroundColor: Colors.WHITE_DEFAULT, 
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