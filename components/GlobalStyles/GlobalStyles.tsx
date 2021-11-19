import { createGlobalStyle } from 'styled-components';
import { ThemeColors } from 'theme/themeTypes';

const GlobalStyles = createGlobalStyle<{ theme: ThemeColors }>`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    min-width: min-content;
  }
// Override the default z-index of 400, so the list of the search results can be visible over the map
  .leaflet-pane {
     z-index: 1; 
  }
  `;

export default GlobalStyles;
