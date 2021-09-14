import Head from 'next/head';
import MainLogo from '../../../public/Covid19_Map_Logo.svg';
import capitalise from 'utils/capitalise.utils';

interface HeadElementProps {
  title?: string | string[] | undefined;
}

export default function HeadElement({ title = 'Covid-19 Map' }: HeadElementProps): JSX.Element {
  return (
    <Head>
      <meta charSet='utf-8' />
      <link rel='icon' href={MainLogo.src} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='description'
        content='Web application that displays Covid-19 for different countries'
      />
      <link rel='apple-touch-icon' href={MainLogo.src} />
      <title>{typeof title === 'string' && `${capitalise(title)} - Covid-19 Map`}</title>
      <meta name='author' content='Tomasz Ziółkowski' />
    </Head>
  );
}
