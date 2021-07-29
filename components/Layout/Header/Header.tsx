import { StyledHeader } from './styles';
import SearchButton from 'components/Elements/SearchButton/SearchButton';
import ThemeSwitch from 'components/Elements/ThemeSwitch/ThemeSwitch';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Covid Map</h1>
      <div>
        <input type='search' placeholder='Search for country...' />
        <SearchButton />
        <ThemeSwitch />
      </div>
    </StyledHeader>
  );
}
