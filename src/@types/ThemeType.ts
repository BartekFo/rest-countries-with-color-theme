import { color, fontFamily, fontWeight, boxShadow, medias } from '@styles/lightTheme';

type ThemeType = {
  fontFamily: typeof fontFamily;
  fontWeight: typeof fontWeight;
  color: typeof color;
  boxShadow: typeof boxShadow;
  medias: typeof medias;
};

export default ThemeType;
