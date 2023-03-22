export const PRIMARY = '#ECFC54';
export const SECONDARY = '#F0F0F0';

export const WHITE = '#FFFFFF';
export const WHITE_TONE_1 = '#FFFCF2';

export const BLACK = '#000000';
export const BLACK_TONE_1 = '#342425';

export const BRAND_YELLOW = '#FFC44A';

export const CHAT_MESSAGE = '#C0FFE1';
export const CHAT_BACKGROUND = '#406A73';
export const CHAT_GREEN = '#3CCC86';
export const CHAT_PINK = '#CC3C92';
export const CHAT_ORANGE = '#FAB235';

// ACTIONS
export const SUCCESS = '#41C42C';
export const SUCCESS_SECONDARY = '#7FEE4B';
export const SUCCESS_TERTIARY = '#3CCC86';
export const WARNING = '#FAB235';
export const FAIL = '#EE3232';
export const FAIL_2 = '#E2293F';
export const DANGER = '#FF5454';
export const DANGER_2 = '#D53636';

// GRAYSCALE
export const GRAY = '#DADADA';
export const GRAY_LIGHT = '#CACFD1';
export const GRAY_MEDIUM = '#808485';
export const GRAY_MEDIUM_2 = '#B3B3B3';
export const GRAY_DARK = '#666666';
export const GRAY_DARK_2 = '#333333';
export const GRAY_DARKEST = '#1E1F1F';
export const GRAY_LIGHTEST = '#F4F4F4';
export const GRAY_BLACK = '#302A2F';

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