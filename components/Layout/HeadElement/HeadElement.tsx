import Head from 'next/head';
import capitalise from 'utils/capitalise.utils';

interface HeadElementProps {
  title?: string | string[] | undefined;
}

export default function HeadElement({ title = 'Covid-19 Map' }: HeadElementProps): JSX.Element {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{typeof title === 'string' && `${capitalise(title)} - Covid-19 Map`}</title>
      <meta
        name='description'
        content='Web application that displays Covid-19 data for different countries'
      />
      <meta name='author' content='Tomasz Ziółkowski' />
      <meta name='theme-color' content='#ffffff' />
      <link
        rel='stylesheet'
        href='https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
        integrity='sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='
        crossOrigin=''
      />
      <script
        src='https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
        integrity='sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=='
        crossOrigin=''
      ></script>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
    </Head>
  );
}
