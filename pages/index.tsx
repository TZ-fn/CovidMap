import { ReactElement, useEffect, useState } from 'react';
import StyledMain from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';
import List from 'components/Elements/List/List';
import { fetchData, sortByCovidCases, sortByVaccineDoses } from 'utils/utils';

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
        <List covidCasesData={covidCasesData} sortByFunction={sortByCovidCases} />
      </CountriesRanking>
      <MainMapContainer />
      <CountriesRanking rankingTitle='Vaccine doses administered'>
        {/* <List data={covidCasesData} vaccinesData={vaccinesData} sortByFunction={sortByVaccineDoses} /> */}
      </CountriesRanking>
    </StyledMain>
  );
}
