import StyledMain from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';

export default function Home() {
  return (
    <StyledMain>
      <CountriesRanking rankingTitle='Covid-19 cases worldwide' />
      <MainMapContainer />
      <CountriesRanking rankingTitle='Vaccine doses administered' />
    </StyledMain>
  );
}
