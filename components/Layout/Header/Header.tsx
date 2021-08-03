import { StyledHeader, StyledControlPanel } from './Header.styles';
import MainLogo from 'components/Elements/MainLogo/MainLogo';
import Input from 'components/Elements/Input/Input';
import SearchButton from 'components/Elements/SearchButton/SearchButton';
import ThemeSwitch from 'components/Elements/ThemeSwitch/ThemeSwitch';

export default function Header() {
  return (
    <StyledHeader>
      <MainLogo />
      <StyledControlPanel>
        <Input type={'search'} placeholder='Search for country...' />
        <SearchButton />
        <ThemeSwitch />
      </StyledControlPanel>
    </StyledHeader>
  );
}
