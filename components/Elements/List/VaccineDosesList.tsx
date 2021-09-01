import { ReactElement } from 'react';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { useEffect, useState } from 'react';
import { fetchData, sortCountries } from 'utils/utils';
import { StyledList } from './List.styles';

interface VaccineDosesInCountry {
  countryName: string;
  vaccineDoses: number;
}

export default function VaccineDosesList(): ReactElement {
  const [vaccinesData, setVaccinesData] = useState([]);

  useEffect(() => {
    fetchData(
      'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false',
      setVaccinesData,
    );
  }, []);

  return (
    <StyledList>
      {vaccinesData?.length > 0
        ? sortCountries(vaccinesData, 12, false).map(
            ({ countryName, vaccineDoses }: VaccineDosesInCountry) => {
              return (
                <CountriesListItem
                  key={countryName}
                  countryFlag='https://disease.sh/assets/img/flags/af.png'
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
