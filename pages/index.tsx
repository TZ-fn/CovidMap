import { ReactElement, useEffect, useState } from 'react';
import StyledMain from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';
import List from 'components/Elements/List/List';
import {
  fetchData,
  sortByCovidCases,
  sortByVaccineDoses,
  createVaccineCountriesObjects,
  createCovidCasesCountriesObjects,
} from 'utils/utils';

export default function Home(): ReactElement {
  const [vaccinesData, setVaccinesData] = useState([]);
  const [covidCasesData, setCovidCasesData] = useState([]);

  useEffect(() => {
    fetchData(
      'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false',
      setVaccinesData,
    );
    fetchData('https://disease.sh/v3/covid-19/countries', setCovidCasesData);
  }, []);

  return (
    <StyledMain>
      <CountriesRanking rankingTitle='Covid-19 cases worldwide'>
        <List
          countryObjectArray={covidCasesData}
          sortByFunction={sortByCovidCases}
          createCountryObjectsFunction={createCovidCasesCountriesObjects}
        />
      </CountriesRanking>
      <MainMapContainer />
      <CountriesRanking rankingTitle='Vaccine doses administered'>
        {/* {vaccinesData && (
          <List
            countryObjectArray={vaccinesData}
            sortByFunction={sortByVaccineDoses}
            createCountryObjectsFunction={createVaccineCountriesObjects}
          />
        )} */}
      </CountriesRanking>
    </StyledMain>
  );
}
