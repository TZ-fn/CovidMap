import { ReactElement } from 'react';
import { StyledCountryDetailsContainer } from './CountryDetailsView.styles';

interface CountryDetailsViewProps {
  countryName: string | string[] | undefined;
}

export default function CountryDetailsView({
  countryName = '',
}: CountryDetailsViewProps): ReactElement {
  return (
    <StyledCountryDetailsContainer>
      <h1>
        {typeof countryName === 'string' &&
          countryName.charAt(0).toUpperCase() + countryName.slice(1)}
      </h1>
    </StyledCountryDetailsContainer>
  );
}
