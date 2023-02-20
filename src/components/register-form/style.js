import { StyleSheet } from 'react-native';
import { Mixins } from '../../styles';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Mixins.scaleSize(24)
  },
  alignActionBtn: {
    position: 'absolute',
    bottom: Mixins.scaleSize(160)
  }
});

export default Style;
