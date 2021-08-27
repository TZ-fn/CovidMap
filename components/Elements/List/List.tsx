import React, { ReactElement } from 'react';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { useEffect, useState } from 'react';
import { fetchData, sortCountriesByVaccineDoses } from 'utils/utils';
import { StyledList } from './List.styles';
type CountryType = [string, number];

export default function List(): ReactElement {
  const [vaccinesData, setVaccinesData] = useState([]);

  useEffect(() => {
    async function getVaccinesData(): Promise<void> {
      setVaccinesData(
        await fetchData(
          'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false',
        ),
      );
    }

    getVaccinesData();
  }, []);

  return (
    <StyledList>
      {vaccinesData?.length > 0
        ? sortCountriesByVaccineDoses(vaccinesData, 12).map((country: CountryType) => {
            return (
              <CountriesListItem
                key={country[0]}
                countryFlag='https://disease.sh/assets/img/flags/af.png'
                countryName={country[0]}
                numberOfCases={country[1]}
              />
            );
          })
        : null}
    </StyledList>
  );
}
