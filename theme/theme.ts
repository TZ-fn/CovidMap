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
    gradientBackground: 'linear-gradient(115deg, hsl(198, 50%, 25%) 0%, hsl(198, 50%, 15%)100%);',
    border: 'hsl(198, 50%, 18%)',
    backgroundLighter: 'hsl(198, 50%, 20%)',
    background: 'hsl(198, 50%, 15%)',
    backgroundDarker: 'hsl(198, 50%, 10%)',
    shadows: {},
  },
  lightTheme: {
    fontColor: 'hsl(198, 50%, 5%)',
    border: 'hsl(198, 65%, 70%)',
    gradientBackground: 'linear-gradient(115deg, hsl(199, 65%, 90%) 0%, hsl(199, 65%, 85%) 50%);',
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
  },
  misc: {
    borderRadius: '0.225em',
  },
};

export default theme;
