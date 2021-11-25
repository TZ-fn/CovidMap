import { ReactElement } from 'react';
import { sortCountries } from 'utils/APIdata.utils';
import CountriesListItem from 'components/Elements/CountriesList/CountriesListItem/CountriesListItem';
import { StyledCountriesList } from './CountriesList.styles';
import { CovidCasesDataForCountry, VaccinesDataForCountry } from 'utils/APIdata.types';

interface ListPropsTypes {
  covidCasesData: CovidCasesDataForCountry[];
  vaccinesData?: VaccinesDataForCountry[];
}

export default function CountriesList({
  covidCasesData,
  vaccinesData,
}: ListPropsTypes): ReactElement {
  function getFlag(countryName: string) {
    return covidCasesData.find((country) => country.country === countryName)?.countryInfo.flag;
  }

  return (
    <>
      {
        <StyledCountriesList>
          {sortCountries(covidCasesData, 12, vaccinesData).map((country) => {
            if (vaccinesData) {
              return (
                <CountriesListItem
                  key={country.country}
                  countryFlag={getFlag(country.country)}
                  countryName={country.country}
                  //  @ts-ignore
                  numberOfCasesOrVaccineDoses={Object.values(country.timeline)[0]}
                />
              );
            } else {
              return (
                <CountriesListItem
                  key={country.country}
                  //  @ts-ignore
                  countryFlag={country.countryInfo.flag}
                  countryName={country.country}
                  //  @ts-ignore
                  numberOfCasesOrVaccineDoses={country.cases}
                />
              );
            }
          })}
        </StyledCountriesList>
      }
    </>
  );
}
