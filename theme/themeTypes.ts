export interface ThemeType {
  darkTheme: {
    fontColor: string;
    gradientBackground: string;
    border: string;
    backgroundLighter: string;
    background: string;
    backgroundDarker: string;
  };
  lightTheme: {
    fontColor: string;
    gradientBackground: string;
    border: string;
    backgroundLighter: string;
    background: string;
    backgroundDarker: string;
  };
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

export interface ThemeColors {
  fontColor: string;
  gradientBackground: string;
  border: string;
  backgroundLighter: string;
  background: string;
  backgroundDarker: string;
}
