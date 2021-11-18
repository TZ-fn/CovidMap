import { ReactElement } from 'react';
import { StyledSearchBarContainer } from './SearchBar.styles';
import Input from 'components/Elements/Input/Input';
import SearchButton from 'components/Elements/SearchButton/SearchButton';

export default function SearchBar(): ReactElement {
  return (
    <StyledSearchBarContainer>
      <form action='/' method='get'>
        <label htmlFor='country-search'>
          <span>Search for a country</span>
        </label>
        <Input type='text' id='country-search' placeholder='Search for a country' name='s' />
        <SearchButton />
      </form>
    </StyledSearchBarContainer>
  );
}
