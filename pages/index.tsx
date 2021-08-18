import { StyledMain } from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import Aside from 'components/Elements/Aside/Aside';
import CountriesRanking from 'components/CountriesRanking/CountriesRanking';

export default function Home() {
  return (
    <StyledMain>
      <CountriesRanking />
      <MainMapContainer />
      <Aside />
    </StyledMain>
  );
}
