import { StyledMain } from './index.styles';
import MainMapContainer from 'components/Layout/MainMapContainer/MainMapContainer';
import Aside from 'components/Elements/Aside/Aside';

export default function Home() {
  return (
    <StyledMain>
      <Aside />
      <MainMapContainer />
      <Aside />
    </StyledMain>
  );
}
