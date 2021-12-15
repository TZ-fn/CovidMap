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
  const [activeSuggestion, setActiveSuggestion] = useState('');

  const handleSearch = (inputValue: string) => {
    setSearchValue(inputValue);
  };

  const resetTheSearch = () => {
    setSearchValue('');
  };

  return (
    <StyledSearchBarContainer>
      <form action='/' method='get'>
        <label htmlFor='country-search'>
          <span>Search for a country</span>
        </label>
        <Input
          value={activeSuggestion ? activeSuggestion : searchValue}
          type='search'
          id='country-search'
          placeholder='Search for a country'
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={(e) => console.log(e.key)}
          name='country'
          autocomplete='off'
        />
        <SearchButton />
      </form>
      {searchValue.length > 0 ? (
        <ResultsList
          searchValue={searchValue}
          resetTheSearch={resetTheSearch}
          countriesNames={countriesNames}
          setActiveSuggestion={setActiveSuggestion}
        />
      ) : null}
    </StyledSearchBarContainer>
  );
}
