import { createGlobalStyle } from 'styled-components';
import { getColor, getFontFamily } from '@styles/utils';

const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${getFontFamily('Nunito')};
    background: ${getColor('background')};
    color: ${getColor('text')};
  }
`;

export default GlobalStyles;
