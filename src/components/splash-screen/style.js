import { StyleSheet } from 'react-native';
import { Mixins, Colors } from '../../styles';

const Style = StyleSheet.create({
  container:{
    backgroundColor: Colors.PRIMARY,
    height: Mixins.WINDOW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Style;