import { ReactElement } from 'react';
import { StyledHeader, StyledControlPanel } from './Header.styles';
import MainLogo from 'components/Elements/MainLogo/MainLogo';
import Input from 'components/Elements/Input/Input';
import SearchButton from 'components/Elements/SearchButton/SearchButton';
import ThemeSwitch from 'components/Elements/ThemeSwitch/ThemeSwitch';
import Image from 'next/image';
import LogoIcon from '../../../public/Covid19_Map_Logo.svg';

export default function Header(): ReactElement {
  return (
    <StyledHeader>
      <Image alt='Covid-19 Map Logo' src={LogoIcon.src} height='85px' width='85px' />
      <MainLogo />
      <StyledControlPanel>
        <Input type={'search'} placeholder='Search for a country...' />
        <SearchButton />
        <ThemeSwitch />
      </StyledControlPanel>
    </StyledHeader>
  );
}
