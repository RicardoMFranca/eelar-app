import * as CustomAlerts from './custom-alerts';

export const emailRegex = (email, show_message=true) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var valid = re.test(String(email).toLowerCase());
  if (!valid) {
    if (show_message) CustomAlerts.showErrorToast('Atenção', 'Seu email é inválido!');
    return false;
  }
  return true;
}

export const passwordLength = (password, show_message=true) => {
  if (password.length < 6) { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', 'Sua senha deve ter no mínimo 6 caracteres!');
    return false;
  }
  return true;
}

export const equalPasswords = (password, confirmation, show_message=true) => {
  if (password == confirmation && password != '') return true;
  else{
    if (show_message) CustomAlerts.showErrorToast('Atenção', 'Sua confirmação deve ser igual a sua senha!');
    return false;
  }
}

export const loginAttempt = (email, password) => {
  return emailRegex(email) && passwordLength(password);
}

export const textLength = (text, label, length, show_message=true) => {
  if (text.length < length) { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', `${label} deve ter mais de ${length} caracteres!`);
    return false;
  }
  return true;
}

export const textEqualLength = (text, label, length, show_message=true) => {
  if (text.length <= length) { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', `${label} deve ter no ${length} caracteres!`);
    return false;
  }
  return true;
}

export const numbertLength = (text, label, length, show_message=true) => {
  if (text.length < length) { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', `${label} é um número inválido!`);
    return false;
  }
  return true;
}

export const elementPresence = (element, label, show_message=true) => {
  if (!element || element == '') { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', `${label} precisa ser preenchido!`);
    return false;
  }
  return true;
}

export const notNull = (element, label, show_message=true) => {
  if (element == null) { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', `${label} precisa ser escolhido!`);
    return false;
  }
  return true;
}

export const numbersOnly = (number, label, show_message=true) => {
  if (!(/^\d+$/.test(number.toString()))) { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', `${label} só permite números!`);
    return false;
  }
  return true;
}

export const isTrue = (element, label) => {
  if (element != true) { 
    CustomAlerts.showErrorToast('Atenção', `Verifique ${label}!`);
    return false;
  }
  return true;
}

validateCPF = (cpf) => {
  const strCPF = cpf.replace(/[^\d]+/g,'');	
  
  if(strCPF.length > 11) return true;
  if(strCPF.length < 11) return false;
  
  if (strCPF == "00000000000" || 
  strCPF == "11111111111" || 
  strCPF == "22222222222" || 
  strCPF == "33333333333" || 
  strCPF == "44444444444" || 
  strCPF == "55555555555" || 
  strCPF == "66666666666" || 
  strCPF == "77777777777" || 
  strCPF == "88888888888" || 
  strCPF == "99999999999") return false;

  var Soma = 0;
  var Resto;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}

export const verifyCPF = (number, show_message=true) => {
  if (!validateCPF(number)) { 
    if (show_message) CustomAlerts.showErrorToast('Atenção', `Seu CPF é inválido!`);
    return false;
  }
  return true;
}
