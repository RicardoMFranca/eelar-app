import { StyleSheet } from 'react-native';
import { Mixins } from '../../../styles';

const Style = StyleSheet.create({
  container: {
    paddingTop: Mixins.scaleSize(16),
    flexDirection: 'row',
    borderBottomWidth: 1, 
    borderColor: 'rgba(0, 0, 0, 0.1)', 
    justifyContent: 'space-between',
  }, 

});

export default Style;