import { ThemeType } from './themeTypes';

export const theme: ThemeType = {
  darkTheme: {
    fontColor: 'hsl(60, 100%, 97%)',
    gradientBackground: 'linear-gradient(115deg, hsl(198, 50%, 25%) 0%, hsl(198, 50%, 17%)100%);',
    border: 'hsl(198, 50%, 18%)',
    backgroundLightest: 'hsl(198, 50%, 30%)',
    backgroundLighter: 'hsl(198, 50%, 20%)',
    background: 'hsl(198, 50%, 17%)',
    backgroundDarker: 'hsl(198, 50%, 13%)',
  },
  lightTheme: {
    fontColor: 'hsl(198, 50%, 5%)',
    border: 'hsl(198, 65%, 70%)',
    gradientBackground: 'linear-gradient(115deg, hsl(199, 65%, 90%) 0%, hsl(199, 65%, 87%) 50%);',
    backgroundLightest: 'hsl(199, 65%, 98%)',
    backgroundLighter: 'hsl(199, 65%, 92%)',
    background: 'hsl(199, 65%, 85%)',
    backgroundDarker: 'hsl(199, 65%, 75%)',
  },
  dataColors: {
    AstronautBlue: 'hsl(199, 100%, 18%)',
    Chambray: 'hsl(218, 45%, 34%)',
    ButterflyBush: 'hsl(260, 28%, 44%)',
    Tapestry: 'hsl(308, 33%, 47%)',
    Cranberry: 'hsl(335, 61%, 57%)',
    Carnation: 'hsl(355, 93%, 67%)',
    Coral: 'hsl(18, 100%, 63%)',
    WebOrange: 'hsl(39, 100%, 50%)',
    Topaz: 'hsl(39, 100%, 75%)',
    NoData: 'hsl(202, 9%, 61%)',
  },
  misc: {
    borderRadius: '0.225em',
    shadows: {
      default: '3px 3px 10px rgba(0, 0, 0, 0.3)',
      lowElevation: `
    0.6px 0.7px 1px hsl(0deg 0% 0% / 0.1),
    1.1px 1.1px 1.8px -1.2px hsl(0deg 0% 0% / 0.1),
    2.6px 2.6px 4.1px -2.5px hsl(0deg 0% 0% / 0.1);
    `,
      mediumElevation: `
    0.6px 0.7px 1px hsl(0deg 0% 0% / 0.11),
    2.1px 2.2px 3.4px -0.8px hsl(0deg 0% 0% / 0.11),
    5.3px 5.4px 8.5px -1.7px hsl(0deg 0% 0% / 0.11),
    13px 13.1px 20.8px -2.5px hsl(0deg 0% 0% / 0.11);
    `,
      highElevation: `
    0.6px 0.7px 1px hsl(0deg 0% 0% / 0.1),
    3.8px 3.8px 6px -0.4px hsl(0deg 0% 0% / 0.1),
    7px 7.1px 11.2px -0.7px hsl(0deg 0% 0% / 0.1),
    11.6px 11.7px 18.5px -1.1px hsl(0deg 0% 0% / 0.1),
    18.5px 18.8px 29.7px -1.4px hsl(0deg 0% 0% / 0.1),
    28.9px 29.3px 46.3px -1.8px hsl(0deg 0% 0% / 0.1),
    44px 44.6px 70.5px -2.1px hsl(0deg 0% 0% / 0.1),
    64.8px 65.7px 103.8px -2.5px hsl(0deg 0% 0% / 0.1);
    `,
    },
  },
  breakpoints: {
    smallest: '41em',
    small: '75em',
    medium: '95em',
    mainLogoSmaller: '54em',
  },
};
export type DataColorsType = keyof typeof theme.dataColors;

export default theme;
