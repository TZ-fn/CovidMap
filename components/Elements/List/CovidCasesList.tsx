import { ReactElement } from 'react';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { sortCountries } from 'utils/utils';
import { StyledList } from './List.styles';

interface CovidCasesInCountry {
  countryName: string;
  covidCases: number;
  countryFlag: string;
}

export default function CovidCasesList({ covidCasesData }): ReactElement {
  return (
    <StyledList>
      {covidCasesData?.length > 0
        ? sortCountries(covidCasesData, 12, true).map(
            ({ countryName, covidCases, countryFlag }: CovidCasesInCountry) => {
              return (
                <CountriesListItem
                  key={countryName}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  numberOfCasesOrVaccineDoses={covidCases}
                />
              );
            },
          )
        : null}
    </StyledList>
  );
}
