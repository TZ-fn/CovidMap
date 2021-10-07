import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    min-width: min-content;
  }
  `;

export default GlobalStyles;
