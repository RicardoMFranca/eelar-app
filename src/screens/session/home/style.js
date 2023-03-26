import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
    selectedPlaces: {
        width: '100%',
    },
    availableEventsContainer: {
        borderRadius: Mixins.scaleSize(24),
        paddingVertical: Mixins.scaleSize(40),
        paddingLeft: Mixins.scaleSize(16),
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
        marginTop: Mixins.scaleSize(32),
        marginBottom: Mixins.scaleSize(48),
    },
    eventsImage: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    eventCardTitle: {
        color: Colors.WHITE_DEFAULT,
        fontSize: Typography.FONT_SIZE_16,
        fontWeight: 'bold',
    },
    eventCardBtn: {
        borderRadius: Mixins.scaleSize(8),
        backgroundColor: Colors.PRIMARY_MEDIUM,
        width: Mixins.scaleSize(116),
        height: Mixins.scaleSize(36),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Mixins.scaleSize(16)
    },
    eventCardBtnLabel: {
        ...Typography.FONT_MEDIUM,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.WHITE_DEFAULT,
    }
});

export default Style;