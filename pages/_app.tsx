import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import theme from 'theme/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme.lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
