import { createGlobalStyle } from 'styled-components';
import { ThemeColors } from 'theme/themeTypes';

const GlobalStyles = createGlobalStyle<{ theme: ThemeColors }>`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    min-width: min-content;
  }
  `;

export default GlobalStyles;
