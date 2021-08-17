import { StyledMain } from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import Aside from 'components/Elements/Aside/Aside';
import CasesRanking from 'components/CasesRanking/CasesRanking';

export default function Home() {
  return (
    <StyledMain>
      <CasesRanking />
      <MainMapContainer />
      <Aside />
    </StyledMain>
  );
}
