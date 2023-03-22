import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
  const dim = Dimensions.get('window');
  
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

export function isIphone5s() {
  const dim = Dimensions.get('window');
  
  return (
    Platform.OS === 'ios' && isIphone5Size(dim)
  );
}

export function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}

export function isIphone5Size(dim) {
  return dim.height == 568 || dim.width == 568;
}