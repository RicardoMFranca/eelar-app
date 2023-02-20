import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
 container: {
    backgroundColor: Colors.WHITE_DEFAULT,
    height: Mixins.scaleSize(72),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
 },
 touchableContainer: {
   flex: 1
 },
 tabIconContainer: {
   alignItems: 'center',
   paddingTop: Mixins.scaleSize(15)
 },
 labelStyle: {
  ...Typography.FONT_REGULAR,
  fontSize: Typography.FONT_SIZE_12,
  textAlign: 'center',
  alignSelf: 'center'
 },
 receiptLabel:{
  color: Colors.BLACK_DEFAULT
 },
 tabBarIconAlign: {
   paddingBottom: Mixins.scaleSize(12),
 }
});

export default Style;