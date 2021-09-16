import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import mainTheme from 'theme/mainTheme';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
