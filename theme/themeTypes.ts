import { DefaultTheme } from 'styled-components';

export interface ThemeType extends DefaultTheme {
  darkTheme: ThemeColors;
  lightTheme: ThemeColors;
  dataColors: {
    NoData: string;
    AstronautBlue: string;
    Chambray: string;
    ButterflyBush: string;
    Tapestry: string;
    Cranberry: string;
    Carnation: string;
    Coral: string;
    WebOrange: string;
    Topaz: string;
  };
  misc: {
    borderRadius: string;
    shadows: {
      default: string;
      lowElevation: string;
      mediumElevation: string;
      highElevation: string;
    };
  };
  breakpoints: {
    smallest: string;
    medium: string;
    mainLogoSmaller: string;
  };
}

export interface ThemeColors extends DefaultTheme {
  fontColor: string;
  gradientBackground: string;
  border: string;
  backgroundLightest: string;
  backgroundLighter: string;
  background: string;
  backgroundDarker: string;
}
