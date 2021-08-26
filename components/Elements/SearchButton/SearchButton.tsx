import * as React from 'react';
import { StyledSearchButton } from './SearchButton.styles';
import SearchIcon from 'public/icons/icons8-search.svg';
import Image from 'next/image';

export default function SearchButton(): React.ReactElement {
  return (
    <StyledSearchButton aria-label='Search'>
      <Image height={57} width={57} src={SearchIcon.src} alt='' />
    </StyledSearchButton>
  );
}
