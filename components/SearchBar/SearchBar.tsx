import { ReactElement, useState, KeyboardEvent, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import {
  StyledSearchBarContainer,
  StyledAutosuggestionList,
  StyledAutosuggestionItem,
} from './SearchBar.styles';
import Input from 'components/Elements/Input/Input';
import SearchButton from 'components/Elements/SearchButton/SearchButton';
import { useRouter } from 'next/router';

interface SearchBarProps {
  countriesNames: string[];
}

export default function SearchBar({ countriesNames }: SearchBarProps): ReactElement {
  const [searchValue, setSearchValue] = useState('');
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [wasArrowDownPressedAlready, setWasArrowDownPressedAlready] = useState(false);
  const savedSearchValue = useRef(searchValue);

  const router = useRouter();

  const filterSuggestions = (searchValue: string) =>
    countriesNames.filter((country) =>
      country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
    );

  const handleSearchInput = (searchValue: string) => {
    setSearchValue(searchValue);
    savedSearchValue.current = searchValue;
    setFilteredSuggestions(filterSuggestions(searchValue));
    setShowSuggestions(true);
    setWasArrowDownPressedAlready(false);
  };

  const resetTheSearch = () => {
    setSearchValue('');
  };

  const handleSearchButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      return;
    }
    setActiveSuggestionIndex(0);
    savedSearchValue.current = '';
    setSearchValue('');
    setShowSuggestions(false);
    setWasArrowDownPressedAlready(false);
    router.push(`/country/${searchValue}`);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      if (!searchValue.trim()) {
        return;
      }
      e.preventDefault();
      if (wasArrowDownPressedAlready && activeSuggestionIndex === filteredSuggestions.length - 1) {
        return;
      }
      if (!wasArrowDownPressedAlready) {
        setSearchValue(filteredSuggestions[0]);
        setWasArrowDownPressedAlready(true);
      } else {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
        setSearchValue(filteredSuggestions[activeSuggestionIndex + 1]);
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeSuggestionIndex === 0) {
        setSearchValue(savedSearchValue.current);
        setWasArrowDownPressedAlready(false);
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
      setSearchValue(filteredSuggestions[activeSuggestionIndex - 1]);
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (!searchValue.trim()) {
        return;
      }
      setActiveSuggestionIndex(0);
      savedSearchValue.current = '';
      setSearchValue('');
      setShowSuggestions(false);
      setWasArrowDownPressedAlready(false);
      router.push(`/country/${searchValue}`);
    }
  };

  return (
    <StyledSearchBarContainer>
      <form action='' method=''>
        <label htmlFor='country-search'>
          <span>Search for a country</span>
        </label>
        <Input
          value={searchValue}
          type='search'
          id='country-search'
          placeholder='Search for a country'
          onChange={(e) => handleSearchInput(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
          onFocus={() => setShowSuggestions(true)}
          autocomplete='off'
        />
        <SearchButton onClick={(e) => handleSearchButton(e)} />
      </form>

      {searchValue?.length > 0 && showSuggestions === true ? (
        <StyledAutosuggestionList>
          {(() => {
            switch (true) {
              case searchValue.length === 1:
                return (
                  <StyledAutosuggestionItem key='inputValueTooShort' isActive>
                    Please enter at least 2 letters...
                  </StyledAutosuggestionItem>
                );
              case filteredSuggestions.length === 0:
                return (
                  <StyledAutosuggestionItem key='NoResults' isActive>
                    No results found...
                  </StyledAutosuggestionItem>
                );
              default:
                return filteredSuggestions.map((country: string, index) => {
                  let isActive = false;
                  if (index === activeSuggestionIndex) {
                    isActive = true;
                  }
                  return (
                    <StyledAutosuggestionItem
                      isActive={isActive}
                      onClick={() => resetTheSearch()}
                      key={country}
                    >
                      <Link href={`/country/${country.toLocaleLowerCase()}`}>{country}</Link>
                    </StyledAutosuggestionItem>
                  );
                });
            }
          })()}
        </StyledAutosuggestionList>
      ) : null}
    </StyledSearchBarContainer>
  );
}
