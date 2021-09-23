import { ReactElement } from 'react';
import { sortCountries, sortByVaccineDosesType, sortByCovidCasesType } from 'utils/APIdata.utils';
import CountriesListItem from 'components/Elements/CountriesList/CountriesListItem/CountriesListItem';
import { StyledCountriesList } from './CountriesList.styles';
import { CovidCasesDataForCountry, VaccinesDataForCountry } from 'utils/APIdata.types';

interface ListPropsTypes {
  covidCasesData: CovidCasesDataForCountry[];
  vaccinesData?: VaccinesDataForCountry[];
  sortByFunction: sortByVaccineDosesType | sortByCovidCasesType;
}

export default function CountriesList({
  covidCasesData,
  vaccinesData,
  sortByFunction,
}: ListPropsTypes): ReactElement {
  function getFlag(countryName: string) {
    return covidCasesData.filter((country) => country.country === countryName)[0].countryInfo.flag;
  }

  return (
    <>
      {vaccinesData && (
        <StyledCountriesList>
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
        </StyledCountriesList>
      )}
      {!vaccinesData && (
        <StyledCountriesList>
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
        </StyledCountriesList>
      )}
    </>
  );
}
