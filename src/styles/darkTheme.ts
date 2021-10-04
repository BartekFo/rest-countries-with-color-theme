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
  text: 'hsl(0, 0%, 100%)',
  elementsColor: 'hsl(209, 23%, 22%)',
  background: 'hsl(207, 26%, 17%)',
  inputText: 'hsl(0, 0%, 100%)',
} as const;

export const medias = {
  tablet: '55em',
};

export const boxShadow = {
  navbar: '0 0 1em rgba(0, 0, 0, 0.3)',
};

const darkTheme: DefaultTheme = {
  fontFamily,
  fontWeight,
  color,
  medias,
  boxShadow,
} as const;

export default darkTheme;
