import Snackbar from 'react-native-snackbar';
import Toast from 'react-native-toast-message';

export const showErrorToast = (title, message) => {
  Toast.show({
    type: 'error',
    position: 'top',
    text1: title,
    text2: message,
    autoHide: false,
    topOffset: 30
  });
}

export const showSuccessToast = (title, message) => {
  Toast.show({
    type: 'success',
    position: 'top',
    text1: title,
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30
  });
}

export const showInfoToast = (title, message) => {
  Toast.show({
    type: 'info',
    position: 'top',
    text1: title,
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30
  });
}

export const showDangerSnackbar = (message) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_INDEFINITE,
    action: {
      text: 'Confirmar',
      textColor: 'red',
      onPress: () => { /* Do something. */ },
    },
  });
}

export const showSuccessSnackbar = (message) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_INDEFINITE,
    action: {
      text: 'Confirmar',
      textColor: 'green',
      onPress: () => { /* Do something. */ },
    },
  });
}