import { Linking } from 'react-native';
import { CustomAlerts } from '../util';
import ApiService from './api';

export const checkEmail = async (email, show_message) => {
  let body = JSON.stringify({email});
  let resp = await USER.verifyEmail(body);
  
  if(resp.valido){
    return true;    
  } else {
    if (show_message) {
      if (resp.mensagem) CustomAlerts.showDangerSnackbar(resp.mensagem);
      else CustomAlerts.showDangerSnackbar('Esse email já está cadastrado!'); 
    }
    return false;
  }
}

export const getClientTerms = async () => {
  Linking.openURL(`${ApiService.URL}termos_de_uso`);
}

export const getPrivacyPolicy = async () => {
  Linking.openURL(`${ApiService.URL}politica_de_privacidade`);
}

export const openMailer = async () => {
  Linking.openURL('mailto:contato@conecta.com.br?subject=Fale com a gente');
}

export const SESSION = {
  post: async (body) => { return await ApiService.postReq('sessão', `sessions.json`, body, false) },
  verifyEmail: async (body) => { return await ApiService.postReq('email', 'sessions/verify_email.json', body, false) }
}

export const RECOVERY_PASSWORD = {
  get: async (email) => { return await ApiService.getReq('senha', `users/recovery_password.json?email=${email}`, false) },
}

export const USER = {
  get:    async () => { return await ApiService.getReq('usuários', `users/me.json`, true) },
  post:   async (body) => { return await ApiService.postReq('usuário', 'users.json', body, false) },
  patch:  async (body, id) => { return await ApiService.patchReq('usuário', `users/${id}.json`, body, false) },
  changePassword:     async (id, body) => { return await ApiService.patchReq('senha do usuário', `users/${id}/update_password.json`, body, true) },
  saveProfilePhoto: async (body) => { return await ApiService.postReq('imagem', `users/${id}/update_image.json`, body, false) }
}