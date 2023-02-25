export const PRIMARY = '#407BFF';
export const PRIMARY_MEDIUM = '#004FFF';
export const PRIMARY_LIGHT = '#9EBCFF';
export const SECONDARY = '#FFB1A9';

export const WHITE_DEFAULT = '#FFFFFF';
export const WHITE_TONE_1 = '#FFFCF2';

export const BLACK_DEFAULT = '#000000';
export const BLACK_TONE_1 = '#332430';

// FEEDBACK POSITIVE
export const SUCCESS_DARK = '#075400';
export const SUCCESS_MEDIUM = '#0EAA00';
export const SUCCESS_LIGHT = '#8AFF80';

// FEEDBACK NEGATIVE
export const WARNING_DARK = '#A20315';
export const WARNING_MEDIUM = '#D81616';
export const WARNING_LIGHT = '#FF8080';

// FEEDBACK ALERT
export const ALERT_DARK = '#947300';
export const ALERT_MEDIUM = '#FBB300';
export const ALERT_LIGHT = '#FFE380';

// GRAYSCALE
export const GRAY = '#DADADA';
export const GRAY_LIGHT = '#E6E6E6';
export const GRAY_MEDIUM = '#CACACA';
export const GRAY_DARK = '#8A8A8A';
export const GRAY_LIGHTEST = '#D7D7D7';

const hexToRgb = hex => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
export function rgba (hex, opacity) {
  const rgb = hexToRgb(hex);
  if(rgb == null) return null;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
}