export interface ThemeType {
  fontColor: string;
  border: string;
  backgroundLighter: string;
  background: string;
  backgroundDarker: string;
}

export const theme = {
  darkTheme: {
    fontColor: 'hsl(60, 100%, 97%)',
    border: 'hsl(198, 50%, 20%)',
    backgroundLighter: 'hsl(198, 50%, 20%)',
    background: 'hsl(198, 50%, 15%)',
    backgroundDarker: 'hsl(198, 50%, 10%)',
  },
  lightTheme: {
    fontColor: 'hsl(198, 50%, 5%)',
    border: 'hsl(198, 50%, 20%)',
    backgroundLighter: 'hsl(218, 45%, 93%)',
    background: 'hsl(218, 45%, 87%)',
    backgroundDarker: 'hsl(218, 45%, 80%)',
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
