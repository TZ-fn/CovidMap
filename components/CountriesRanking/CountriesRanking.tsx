import { StyledCountriesRanking } from './CountriesRanking.styles';
import List from 'components/Elements/List/List';

export default function CountriesRanking() {
  return (
    <StyledCountriesRanking>
      <h2>Covid-19 cases worldwide</h2>
      <List />
    </StyledCountriesRanking>
  );
}
