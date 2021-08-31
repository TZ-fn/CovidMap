import { ReactElement } from 'react';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { useEffect, useState } from 'react';
import { fetchData, sortCountriesByVaccineDoses } from 'utils/vaccineDoses.utils';
import { StyledList } from './List.styles';

type VaccineDosesInCountry = [string, number];

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
        ? sortCountriesByVaccineDoses(vaccinesData, 12).map((country: VaccineDosesInCountry) => {
            return (
              <CountriesListItem
                key={country[0]}
                countryFlag='https://disease.sh/assets/img/flags/af.png'
                countryName={country[0]}
                numberOfCasesOrVaccineDoses={country[1]}
              />
            );
          })
        : null}
    </StyledList>
  );
}
