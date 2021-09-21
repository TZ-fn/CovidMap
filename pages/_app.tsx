import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import { theme as mainTheme } from 'theme/theme';
import { useColorMode } from 'hooks/useColorMode';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [theme, themeToggler] = useColorMode();
  return (
    <ThemeProvider theme={theme === 'dark' ? mainTheme.darkTheme : mainTheme.lightTheme}>
      <GlobalStyles />
      <Layout themeToggler={themeToggler}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
