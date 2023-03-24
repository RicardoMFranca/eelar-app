import { StyleSheet } from 'react-native';
import { Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: Mixins.scaleSize(56),
    borderRadius: Mixins.scaleSize(16),
    backgroundColor: 'transparent',
    borderWidth: Mixins.scaleSize(1),
  },
  text: {
    ...Typography.FONT_REGULAR,
    fontSize: Typography.FONT_SIZE_18,
    lineHeight: Mixins.scaleSize(25),
  },
  iconRight: {
    marginRight: Mixins.scaleSize(-13),
  },
  iconLeft: {
    marginLeft: Mixins.scaleSize(-13),
  },
});

export default Style;