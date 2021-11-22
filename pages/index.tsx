import { ReactElement } from 'react';
import StyledMain from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';
import CountriesList from 'components/Elements/CountriesList/CountriesList';
import LoadingSpinner from 'components/Elements/LoadingSpinner/LoadingSpinner';
import { CovidCasesData, VaccinesData } from 'utils/APIdata.types';

interface HomeProps {
  vaccinesData: VaccinesData;
  covidCasesData: CovidCasesData;
}

export default function Home({ vaccinesData, covidCasesData }: HomeProps): ReactElement {
  return (
    <StyledMain>
      {vaccinesData?.length > 0 && covidCasesData?.length > 0 ? (
        <>
          <CountriesRanking rankingTitle='Covid-19 cases worldwide'>
            <CountriesList covidCasesData={covidCasesData} />
          </CountriesRanking>
          <MainMapContainer covidCasesData={covidCasesData} />
          <CountriesRanking rankingTitle='Vaccine doses administered'>
            <CountriesList covidCasesData={covidCasesData} vaccinesData={vaccinesData} />
          </CountriesRanking>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </StyledMain>
  );
}
