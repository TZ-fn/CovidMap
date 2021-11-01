import { ReactElement } from 'react';
import { StyledCountryDetailsContainer } from './CountryDetailsView.styles';
import ChartsContainer from './ChartsContainer/ChartsContainer';
import capitalise from 'utils/capitalise.utils';

interface CountryDetailsViewProps {
  countryName: string | string[] | undefined;
}

export default function CountryDetailsView({
  countryName = '',
}: CountryDetailsViewProps): ReactElement {
  return (
    <StyledCountryDetailsContainer>
      <h2>{typeof countryName === 'string' && capitalise(countryName)}</h2>
      <ChartsContainer />
    </StyledCountryDetailsContainer>
  );
}
