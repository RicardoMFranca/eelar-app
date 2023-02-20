import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 375;

export const WINDOW_HEIGHT =  height;
export const WINDOW_WIDTH = width;

export const scaleSize = size => (WINDOW_WIDTH/guidelineBaseWidth) * size;

function dimensions(top, right = top, bottom = top, left = right, property){
  let styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top, right, bottom, left){
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(color, offset = {height:2,width:2}, radius = 8, opacity = 0.2){
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

export function isPortrait(){
  return height >= width;
};

export function isLandscape(){
  return width >= height;
};