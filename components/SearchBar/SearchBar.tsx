import { ReactElement, useEffect, useState } from 'react';
import { StyledSearchBarContainer } from './SearchBar.styles';
import Input from 'components/Elements/Input/Input';
import ResultsList from './ResultsList/ResultsList';
import SearchButton from 'components/Elements/SearchButton/SearchButton';
import { fetchData } from 'utils/fetchData.utils';

export default function SearchBar(): ReactElement {
  const [searchValue, setSearchValue] = useState('');
  const [covidCasesData, setCovidCasesData] = useState<[] | CovidCasesData>([]);

  const handleSearch = (inputValue: string) => {
    setSearchValue(inputValue);
  };

  const resetTheSearch = () => {
    setSearchValue('');
  };

  useEffect(() => {
    fetchData('https://disease.sh/v3/covid-19/countries', setCovidCasesData);
  }, []);

  const countriesNames = covidCasesData.map((country) => {
    return country.country;
  });

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
