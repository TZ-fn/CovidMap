import { ReactElement, useContext, ChangeEventHandler } from 'react';
import Link from 'next/link';
import { StyledHeader, StyledControlPanel } from './Header.styles';
import MainLogo from 'components/Elements/MainLogo/MainLogo';
import Input from 'components/Elements/Input/Input';
import SearchButton from 'components/Elements/SearchButton/SearchButton';
import ThemeSwitch from 'components/Elements/ThemeSwitch/ThemeSwitch';
import Image from 'next/image';
import LogoIcon from '../../../public/Covid19_Map_Logo.svg';
import { ThemeTogglerContext } from 'pages/_app';

export default function Header(): ReactElement {
  const themeToggler: ChangeEventHandler<HTMLInputElement> | undefined =
    useContext(ThemeTogglerContext);
  return (
    <StyledHeader>
      <Link href='/' passHref>
        <a>
          <Image alt='Covid-19 Map Logo' src={LogoIcon.src} height='85px' width='85px' />
        </a>
      </Link>
      <MainLogo />
      <StyledControlPanel>
        <Input type={'search'} placeholder='Search for a country...' />
        <SearchButton />
        <ThemeSwitch onChange={themeToggler} />
      </StyledControlPanel>
    </StyledHeader>
  );
}
