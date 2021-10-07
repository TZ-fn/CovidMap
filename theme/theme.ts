export interface ThemeType {
  fontColor: string;
  border: string;
  gradientBackground: string;
  backgroundLighter: string;
  background: string;
  backgroundDarker: string;
}

export const theme = {
  darkTheme: {
    fontColor: 'hsl(60, 100%, 97%)',
    gradientBackground: 'linear-gradient(115deg, hsl(198, 50%, 25%) 0%, hsl(198, 50%, 17%)100%);',
    border: 'hsl(198, 50%, 18%)',
    backgroundLighter: 'hsl(198, 50%, 20%)',
    background: 'hsl(198, 50%, 15%)',
    backgroundDarker: 'hsl(198, 50%, 12%)',
  },
  lightTheme: {
    fontColor: 'hsl(198, 50%, 5%)',
    border: 'hsl(198, 65%, 70%)',
    gradientBackground: 'linear-gradient(115deg, hsl(199, 65%, 90%) 0%, hsl(199, 65%, 87%) 50%);',
    backgroundLighter: 'hsl(199, 65%, 92%)',
    background: 'hsl(199, 65%, 85%)',
    backgroundDarker: 'hsl(199, 65%, 75%)',
  },
  dataColors: {
    NoData: 'hsl(202, 9%, 61%)',
    AstronautBlue: 'hsl(199, 100%, 18%)',
    Chambray: 'hsl(218, 45%, 34%)',
    ButterflyBush: 'hsl(260, 28%, 44%)',
    Tapestry: 'hsl(308, 33%, 47%)',
    Cranberry: 'hsl(335, 61%, 57%)',
    Carnation: 'hsl(355, 93%, 67%)',
    Coral: 'hsl(18, 100%, 63%)',
    WebOrange: 'hsl(39, 100%, 50%)',
  },
  misc: {
    borderRadius: '0.225em',
    shadows: {
      default: '3px 3px 10px rgba(0, 0, 0, 0.3)',
      lowElevation: `
  0.7px 0.7px 2.2px rgba(0, 0, 0, 0.02),
  1.7px 1.7px 5.3px rgba(0, 0, 0, 0.028),
  3.1px 3.1px 10px rgba(0, 0, 0, 0.035),
  5.6px 5.6px 17.9px rgba(0, 0, 0, 0.042),
  10.4px 10.4px 33.4px rgba(0, 0, 0, 0.05),
  25px 25px 80px rgba(0, 0, 0, 0.07)
`,
      mediumElevation: `
  1.4px 1.4px 2.2px rgba(0, 0, 0, 0.02),
  3.3px 3.3px 5.3px rgba(0, 0, 0, 0.028),
  6.3px 6.3px 10px rgba(0, 0, 0, 0.035),
  11.2px 11.2px 17.9px rgba(0, 0, 0, 0.042),
  20.9px 20.9px 33.4px rgba(0, 0, 0, 0.05),
  50px 50px 80px rgba(0, 0, 0, 0.07)
`,
      highElevation: `
  2.1px 2.1px 2.2px rgba(0, 0, 0, 0.02),
  5px 5px 5.3px rgba(0, 0, 0, 0.028),
  9.4px 9.4px 10px rgba(0, 0, 0, 0.035),
  16.8px 16.8px 17.9px rgba(0, 0, 0, 0.042),
  31.3px 31.3px 33.4px rgba(0, 0, 0, 0.05),
  75px 75px 80px rgba(0, 0, 0, 0.07)
`,
    },
  },
  breakpoints: {
    smallest: '41em',
    medium: '95em',
    mainLogoSmaller: '54em',
  },
};

['#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'];

export default theme;
