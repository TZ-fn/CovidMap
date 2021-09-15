import Head from 'next/head';
import capitalise from 'utils/capitalise.utils';

interface HeadElementProps {
  title?: string | string[] | undefined;
}

export default function HeadElement({ title = 'Covid-19 Map' }: HeadElementProps): JSX.Element {
  return (
    <Head>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='theme-color' content='#ffffff' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        content='Web application that displays Covid-19 data for different countries'
      />
      <title>{typeof title === 'string' && `${capitalise(title)} - Covid-19 Map`}</title>
      <meta name='author' content='Tomasz Ziółkowski' />
    </Head>
  );
}
