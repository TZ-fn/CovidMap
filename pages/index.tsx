import { ReactElement, useEffect, useState } from 'react';
import StyledMain from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';
import CovidCasesList from 'components/Elements/List/CovidCasesList';
import VaccineDosesList from 'components/Elements/List/VaccineDosesList';
import { fetchData } from 'utils/utils';

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
        <CovidCasesList covidCasesData={covidCasesData} />
      </CountriesRanking>
      <MainMapContainer />
      <CountriesRanking rankingTitle='Vaccine doses administered'>
        <VaccineDosesList vaccinesData={vaccinesData} />
      </CountriesRanking>
    </StyledMain>
  );
}
