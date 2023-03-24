import AsyncStorage from '@react-native-async-storage/async-storage';
import { Helpers } from '../util';

setUser = async (resp) => {
  const user = {
    id: resp.id,
    email: resp.email,
    nome: resp.nome,
    authentication_token: resp.authentication_token,
    tipo: resp.tipo
  };

  await AsyncStorage.setItem("user", JSON.stringify(user));
  return user;
}

getUser = async () => {
  return JSON.parse(await AsyncStorage.getItem("user"));
}

logout = async (props) => {
  await AsyncStorage.clear();
  Helpers.resetRedirect(props, 0, 'Auth');
}

export default {
  setUser,
  getUser,
  logout
};