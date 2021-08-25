import { StyledCountriesRanking } from './CountriesRanking.styles';
import List from 'components/Elements/List/List';

interface CountriesRankingProps {
  rankingTitle: string;
}

export default function CountriesRanking({ rankingTitle }: CountriesRankingProps) {
  return (
    <StyledCountriesRanking>
      <h2>{rankingTitle}</h2>
      <List />
    </StyledCountriesRanking>
  );
}
