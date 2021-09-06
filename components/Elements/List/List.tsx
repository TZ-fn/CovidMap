import { ReactElement } from 'react';
import { sortCountries } from 'utils/utils';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { StyledList } from './List.styles';
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
  return (
    <>
      {vaccinesData && (
        <StyledList>
          {vaccinesData.length > 0 &&
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
      {/* <StyledList>
        {countryObjectArray.length > 0 &&
          createCountryObjectsFunction(sortCountries(countryObjectArray, 12, sortByFunction))?.map(
            ({ countryName, number, countryFlag }: countryObject) => {
              return (
                <CountriesListItem
                  key={countryName}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  numberOfCasesOrVaccineDoses={number}
                />
              );
            },
          )}
      </StyledList> */}
    </>
  );
}
