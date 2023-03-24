import StorageService from '../services/storage';
import { CustomAlerts } from '../util';

const URL = 'https://base-rails6-api.herokuapp.com/';

const CONFIG = {
  URL: `${URL}api/`,
  TOKEN: 'Token e3fac63087ca0d03ecc4805b92528ace'
};

const setHeaders = async (content_type, check) => {
  let headers = new Headers({
    'Content-Type': content_type,
    'Authorization': CONFIG.TOKEN
  });
  if(check){
    const user = await StorageService.getUser();
    if(user){
      headers.append('X-Usuario-Token', user.authentication_token);
      headers.append('X-Usuario-Email', user.email);
    }
  }
  return headers;
}

const getResp = async (resp) => {
  if (resp) {
    const json = await resp.json();
    if (json) {
      if (resp.status > 400) {
        if (json.message != '') CustomAlerts.showErrorToast('Atenção', json.message);
        else CustomAlerts.showErrorToast('Atenção', JSON.stringify(json));
        return null;
      } else return json;
    }
  } 
  return null;
}

getReq = async (label, url, check) => {
  try{
    let headers = await setHeaders('application/json', check);
    
    let reqParams = {
      method: 'GET',
      headers
    }

    let urlCompleta = CONFIG.URL + url;
    let resp = await fetch(urlCompleta, reqParams);
    return await getResp(resp);
  }catch(e){
    console.warn(`Erro ao carregar ${label}: `+e);
    CustomAlerts.showDangerSnackbar(`Erro ao carregar ${label}`);
    return null;
  }
} 

postReq = async (label, url, body, check) => {
  try{
    let headers = await setHeaders('application/json', check);

    let reqParams = {
      method: 'POST',
      headers,
      body
    }

    let urlCompleta = CONFIG.URL + url;
    let resp = await fetch(urlCompleta, reqParams);
    return await getResp(resp);
  }catch(e){
    console.warn(`Erro ao criar ${label}: `+e);
    CustomAlerts.showDangerSnackbar(`Erro ao criar ${label}`);
    return null;
  }
}

patchReq = async (label, url, body, check) => {
  try{
    let headers = await setHeaders('application/json', check);

    let reqParams = {
      method: 'PATCH',
      headers,
      body
    }

    let urlCompleta = CONFIG.URL + url;
    let resp = await fetch(urlCompleta, reqParams);
    return await getResp(resp);
  }catch(e){
    console.warn(`Erro ao atualizar ${label}: `+e);
    CustomAlerts.showDangerSnackbar(`Erro ao atualizar ${label}`);
    return null;
  }
}

deleteReq = async (label, url, check) => {
  try{
    let headers = await setHeaders('application/json', check);

    let reqParams = {
      method: 'DELETE',
      headers,
    }

    let urlCompleta = CONFIG.URL + url;
    let resp = await fetch(urlCompleta, reqParams);
    return await getResp(resp);
  }catch(e){
    console.warn(`Erro ao remover ${label}: `+e);
    CustomAlerts.showDangerSnackbar(`Erro ao remover ${label}`);
    return null;
  }
}

sendFile = async (label, url, body, check) => {
  try{
    let headers = await setHeaders('multipart/form-data', check);
    
    let reqParams = {
      method: 'POST',
      headers,
      body
    }

    let urlCompleta = CONFIG.URL + url;
    
    let resp = await fetch(urlCompleta, reqParams);
    return await getResp(resp);
  }catch(e){
    console.warn(`Erro ao enviar imagem do ${label}: `+e);
    CustomAlerts.showDangerSnackbar(`Erro ao enviar imagem do ${label}`);
    return null;
  }
}

export default {
  URL,
  CONFIG,
  getReq,
  postReq,
  patchReq, 
  deleteReq,
  sendFile
};