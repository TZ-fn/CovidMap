import { ReactElement, Dispatch, SetStateAction } from 'react';
import { StyledResultsList } from './ResultsList.styles';
import Link from 'next/dist/client/link';

interface ResultsListProps {
  searchValue: string;
  resetTheSearch: () => void;
  countriesNames: string[];
  setActiveSuggestion: Dispatch<SetStateAction<string>>;
}

export default function ResultsList({
  searchValue = '',
  resetTheSearch,
  countriesNames,
}: ResultsListProps): ReactElement | null {
  const filteredCountries = countriesNames.filter((country: string) =>
    country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  return (
    <StyledResultsList
      onKeyDown={(e) => {
        // if (e.key === 'Enter') {
        console.log(e.key);
        // }
      }}
    >
      {(() => {
        switch (true) {
          case searchValue.length === 1:
            return <li key='inputValueTooShort'>Please enter at least 2 letters...</li>;
          case filteredCountries.length === 0:
            return <li key='NoResults'>No results found...</li>;
          default:
            return filteredCountries.map((country: string) => {
              return (
                <li onClick={() => resetTheSearch()} key={country}>
                  <Link href={`/country/${country.toLocaleLowerCase()}`}>{country}</Link>
                </li>
              );
            });
        }
      })()}
    </StyledResultsList>
  );
}
