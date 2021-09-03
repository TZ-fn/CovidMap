import { ReactElement } from 'react';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { sortCountries } from 'utils/utils';
import { StyledList } from './List.styles';

interface VaccineDosesInCountry {
  countryName: string;
  vaccineDoses: number;
  countryFlag: string;
}

export default function VaccineDosesList({ vaccinesData }): ReactElement {
  return (
    <StyledList>
      {vaccinesData?.length > 0
        ? sortCountries(vaccinesData, 12, false).map(
            ({ countryName, vaccineDoses, countryFlag }: VaccineDosesInCountry) => {
              return (
                <CountriesListItem
                  key={countryName}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  numberOfCasesOrVaccineDoses={vaccineDoses}
                />
              );
            },
          )
        : null}
    </StyledList>
  );
}
