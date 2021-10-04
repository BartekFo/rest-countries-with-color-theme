import { DefaultTheme } from 'styled-components';

export const fontFamily = {
  Nunito: "'Nunito Sans', sans-serif",
} as const;

export const fontWeight = {
  regular: '300',
  semiBold: '600',
  bold: '700',
};

export const color = {
  text: 'hsl(200, 15%, 8%)',
  elementsColor: 'hsl(0, 0%, 100%)',
  background: 'hsl(0, 0%, 98%)',
  inputText: 'hsl(0, 0%, 52%)',
} as const;

export const medias = {
  tablet: '55em',
};

export const boxShadow = {
  navbar: '0 0 1em rgba(97, 121, 139, 0.3)',
};

const lightTheme: DefaultTheme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  boxShadow,
} as const;

export default lightTheme;
