import { StyledHeader } from './styles';
import SearchButton from 'components/Elements/SearchButton/SearchButton';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Covid Map</h1>
      <div>
        <input type='search' placeholder='Search for country...' />
        <SearchButton />
        <input type='checkbox' name='theme-picker' id='' />
      </div>
    </StyledHeader>
  );
}
