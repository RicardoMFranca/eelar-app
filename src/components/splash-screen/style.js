import { StyleSheet } from 'react-native';
import { Mixins, Colors } from '../../styles';

const Style = StyleSheet.create({
  container:{
    backgroundColor: Colors.WHITE_DEFAULT,
    height: Mixins.WINDOW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Style;