import React, { ReactElement, useContext, ChangeEventHandler } from 'react';
import Link from 'next/link';
import { StyledHeader } from './Header.styles';
import LogoIcon from 'components/Elements/LogoIcon/LogoIcon';
import MainLogo from 'components/Elements/MainLogo/MainLogo';
import SearchBar from 'components/SearchBar/SearchBar';
import ThemeSwitch from 'components/Elements/ThemeSwitch/ThemeSwitch';
import { ThemeTogglerContext } from 'pages/_app';

export default function Header(): ReactElement {
  const themeToggler: ChangeEventHandler<HTMLInputElement> | undefined =
    useContext(ThemeTogglerContext);
  return (
    <StyledHeader>
      <Link href='/' passHref>
        <a>
          <LogoIcon />
        </a>
      </Link>
      <MainLogo />
      <SearchBar />
      <ThemeSwitch onChange={themeToggler} />
    </StyledHeader>
  );
}
