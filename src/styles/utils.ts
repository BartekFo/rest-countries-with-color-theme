import ThemeType from '@root/@types/ThemeType';
import { color, fontFamily, fontWeight, boxShadow, medias } from './lightTheme';

type StyledComponentsTheme = { theme: ThemeType };
export const getColor =
  (colorName: keyof typeof color) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.color[colorName];

export const getFontFamily =
  (fontName: keyof typeof fontFamily) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.fontFamily[fontName];

export const getFontWeight =
  (fontWeightName: keyof typeof fontWeight) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.fontWeight[fontWeightName];

export const getBoxShadow =
  (boxShadowName: keyof typeof boxShadow) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.boxShadow[boxShadowName];

export const getMedias =
  (mediaName: keyof typeof medias) =>
  ({ theme }: StyledComponentsTheme): string =>
    theme.medias[mediaName];
