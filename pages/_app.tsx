import { ReactElement, createContext, ChangeEventHandler } from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import { theme as mainTheme } from 'theme/theme';
import { useColorMode } from 'hooks/useColorMode';
import HeadElement from 'components/Layout/HeadElement/HeadElement';

type ThemeTogglerContextProps = ChangeEventHandler<HTMLInputElement> | undefined;

export const ThemeTogglerContext = createContext<ThemeTogglerContextProps>(undefined);

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [theme, themeToggler] = useColorMode();

  return (
    <ThemeTogglerContext.Provider value={themeToggler}>
      <ThemeProvider theme={theme === 'dark' ? mainTheme.darkTheme : mainTheme.lightTheme}>
        <GlobalStyles />
        <HeadElement />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeTogglerContext.Provider>
  );
}

export default MyApp;
