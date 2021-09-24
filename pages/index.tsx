import { ReactElement, useEffect, useState } from 'react';
import StyledMain from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';
import CountriesList from 'components/Elements/CountriesList/CountriesList';
import { sortByCovidCases, sortByVaccineDoses } from 'utils/APIdata.utils';
import { fetchData } from 'utils/fetchData.utils';

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
      {vaccinesData?.length > 0 && covidCasesData?.length > 0 ? (
        <>
          <CountriesRanking rankingTitle='Covid-19 cases worldwide'>
            <CountriesList covidCasesData={covidCasesData} />
          </CountriesRanking>
          <MainMapContainer />
          <CountriesRanking rankingTitle='Vaccine doses administered'>
            <CountriesList covidCasesData={covidCasesData} vaccinesData={vaccinesData} />
          </CountriesRanking>
        </>
      ) : (
        <p>Loading</p>
      )}
    </StyledMain>
  );
}
