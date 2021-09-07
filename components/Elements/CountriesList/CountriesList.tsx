import { ReactElement } from 'react';
import { sortCountries } from 'utils/APIdata.utils';
import CountriesListItem from 'components/Elements/CountriesList/CountriesListItem/CountriesListItem';
import { StyledList } from './CountriesList.styles';
import { CovidCasesDataForCountry, VaccinesDataForCountry } from 'utils/APIdata.types';

interface ListProps {
  covidCasesData: CovidCasesDataForCountry[];
  vaccinesData?: VaccinesDataForCountry[];
  sortByFunction: Function;
}

export default function List({
  covidCasesData,
  vaccinesData,
  sortByFunction,
}: ListProps): ReactElement {
  function getFlag(countryName: string) {
    return covidCasesData.filter((country) => country.country === countryName)[0].countryInfo.flag;
  }

  return (
    <>
      {vaccinesData && (
        <StyledList>
          {vaccinesData.length > 0 &&
            covidCasesData.length > 0 &&
            sortCountries(vaccinesData, 12, sortByFunction).map((country) => {
              return (
                <CountriesListItem
                  key={country.country}
                  countryFlag={getFlag(country.country)}
                  countryName={country.country}
                  numberOfCasesOrVaccineDoses={Object.values(country.timeline)[0]}
                />
              );
            })}
        </StyledList>
      )}
      {!vaccinesData && (
        <StyledList>
          {covidCasesData.length > 0 &&
            sortCountries(covidCasesData, 12, sortByFunction).map((country) => {
              return (
                <CountriesListItem
                  key={country.country}
                  countryFlag={country.countryInfo.flag}
                  countryName={country.country}
                  numberOfCasesOrVaccineDoses={country.cases}
                />
              );
            })}
        </StyledList>
      )}
    </>
  );
}
