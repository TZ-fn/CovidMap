import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { useEffect, useState } from 'react';
import { fetchData } from 'utils/utils';
import { StyledList } from './List.styles';

export default function List() {
  const [vaccinesData, setVaccinesData] = useState(null);
  useEffect(() => {
    async () => {
      setVaccinesData(
        await fetchData(
          'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false',
        ),
      );
    };
  }, []);

  console.log(vaccinesData);

  return (
    <StyledList>
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/pl.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/gb.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
      <CountriesListItem
        countryFlag='https://disease.sh/assets/img/flags/af.png'
        countryName='Afghanistan'
        numberOfCases={123456}
      />
    </StyledList>
  );
}
