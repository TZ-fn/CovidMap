import { ReactElement } from 'react';
import { StyledCountryDetailsContainer } from './CountryDetailsView.styles';
import capitalise from 'utils/capitalise.utils';

interface CountryDetailsViewProps {
  countryName: string | string[] | undefined;
}

export default function CountryDetailsView({
  countryName = '',
}: CountryDetailsViewProps): ReactElement {
  return (
    <StyledCountryDetailsContainer>
      <h1>{typeof countryName === 'string' && capitalise(countryName)}</h1>
    </StyledCountryDetailsContainer>
  );
}
