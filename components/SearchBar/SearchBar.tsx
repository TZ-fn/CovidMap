import { ReactElement, useState } from 'react';
import { StyledSearchBarContainer } from './SearchBar.styles';
import Input from 'components/Elements/Input/Input';
import ResultsList from './ResultsList/ResultsList';
import SearchButton from 'components/Elements/SearchButton/SearchButton';

interface SearchBarProps {
  countriesNames: string[];
}

export default function SearchBar({ countriesNames }: SearchBarProps): ReactElement {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (inputValue: string) => {
    setSearchValue(inputValue);
  };

  const resetTheSearch = () => {
    setSearchValue('');
  };

  return (
    <StyledSearchBarContainer>
      <label htmlFor='country-search'>
        <span>Search for a country</span>
      </label>
      <Input
        value={searchValue}
        type='text'
        id='country-search'
        placeholder='Search for a country'
        onChange={(e) => handleSearch(e.target.value)}
        autocomplete='off'
      />
      {searchValue.length > 0 ? (
        <ResultsList
          searchValue={searchValue}
          resetTheSearch={resetTheSearch}
          countriesNames={countriesNames}
        />
      ) : null}
      <SearchButton />
    </StyledSearchBarContainer>
  );
}
