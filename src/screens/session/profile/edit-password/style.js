import { StyleSheet } from 'react-native';
import { Colors } from '../../../../styles';

const Style = StyleSheet.create({
  buttonLogout: {
    marginTop: 20,
    marginBottom: 20,
    width: '55%',
    height: 40,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textLogoutButton: {
    color: Colors.preto,
    fontSize: 16
  }
});

export default Style;