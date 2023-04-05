import { CommonActions } from '@react-navigation/native';
import { Linking } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import moment from 'moment';
import 'moment/locale/pt-br';

export const findIndexInArrayById = (list, reference, param) => {
  var index = -1;
  for(var i=0; i<list.length; i++){
    if(list[i][reference] == param){
      index = i;
      break;
    }
  }
  return index;
}

export const findIndex = (list, element, reference) => {
  return list.indexOf(list.find((e) => e[reference] == element[reference]));
}

export const monthText = (month) => {
  switch (Number(month)) {
    case 1:
      return "JAN"
    case 2:
      return "FEV"
    case 3:
      return "MAR"
    case 4:
      return "ABR"
    case 5:
      return "MAI"
    case 6:
      return "JUN"
    case 7:
      return "JUL"
    case 8:
      return "AGO"
    case 9:
      return "SET"
    case 10:
      return "OUT"
    case 11:
      return "NOV"
    case 12:
      return "DEZ"
    default:
      return ""
  }
}

export const getDaysInMonth = (month, year) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export const isSameDate = (first, second) => {
  return first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
}

export const getInitials = (name) => {
  var name = name;
  if (name){
      var initials = name.match(/\b\w/g) || [];
      initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
      return initials;
  }
}

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'}).format(value);
}

export const resetRedirect = (props, index, name) => {
  const resetAction = CommonActions.reset({
    index,
    routes: [
      { name },
    ]
  });
  props.navigation.dispatch(resetAction);
}

export const removeHTML = (value) => {
  const regex = /(<([^>]+)>)/ig;
  return String(value).replace(regex, '');
}

export const removeAccents = (value) => {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const handleEventDate = (date_type, date) => {
  const typesOfDate = {
    'day': moment(date).format('D'),
    'month': moment(date).format('MMM')
  };
  return typesOfDate[date_type];
};

export const removeAccentes = (string) => {
  string = string.toLowerCase();                                                         
  string = string.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
  string = string.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
  string = string.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
  string = string.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
  string = string.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
  string = string.replace(new RegExp('[Ç]','gi'), 'c');
  return string;    
};

export const goToMaps = (fullAddress) => {
  const url = Platform.select({
    ios: `maps:0,0?q=${fullAddress}`,
    android: `geo:0,0?q=${fullAddress}`,
  })

  Linking.openURL(url)
};