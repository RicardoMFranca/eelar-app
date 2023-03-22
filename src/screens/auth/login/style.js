import { StyleSheet } from 'react-native';
import { Colors, Mixins, Typography } from '../../../styles';

const Style = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  loginFormContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: Mixins.scaleSize(54)
  },
  alignIconInput: {
    position: 'relative',
  },
  emailContainer: {
    marginBottom: Mixins.scaleSize(24)
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Mixins.scaleSize(24)
  },
  rememberMeCheck: (isChecked) => ({
    width: Mixins.scaleSize(23),
    height: Mixins.scaleSize(23),
    backgroundColor: isChecked ? Colors.BLACK : 'transparent',
    borderColor: Colors.GRAY_LIGHT,
    borderWidth: 1,
    marginRight: Mixins.scaleSize(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Mixins.scaleSize(3)
  }),
  rememberMeText: {
    ...Typography.FONT_SEMI_BOLD_2,
    fontSize: Typography.FONT_SIZE_14,
    borderColor: Colors.BLACK
  }
});

export default Style;