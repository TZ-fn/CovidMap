import { ReactElement } from 'react';
import { StyledResultsList } from './ResultsList.styles';
import Link from 'next/dist/client/link';

export default function ResultsList(): ReactElement {
  return (
    <StyledResultsList>
      <li>
        <Link href='/country/India'>India</Link>
      </li>
      <li>
        <Link href='/country/Brazil'>Brazil</Link>
      </li>
      <li>
        <Link href='/country/Russia'>Russia</Link>
      </li>
      <li>
        <Link href='/country/UK'> UK</Link>
      </li>
      <li>
        <Link href='/country/Germany'>Germany</Link>
      </li>
      <li>
        <Link href='/country/Poland'>Poland</Link>
      </li>
    </StyledResultsList>
  );
}
