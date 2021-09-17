import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    transition: all 0.50s linear;
  }
  `;

export default GlobalStyles;
