import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.darkTheme.background};
    color: ${({ theme }) => theme.darkTheme.fontColor};
    transition: all 0.50s linear;
  }
  `;

export default GlobalStyles;
