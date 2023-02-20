import { StyleSheet } from 'react-native';
import { Mixins } from '../../styles';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },  
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Mixins.WINDOW_HEIGHT,
    width: Mixins.WINDOW_WIDTH
  }
});

export default Style;