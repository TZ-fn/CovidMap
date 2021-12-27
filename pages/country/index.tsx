import ErrorContainer from 'components/Elements/ErrorContainer/ErrorContainer';
import { ReactElement } from 'react';
import { StyledCountryViewContainer } from './[countryName]';

export default function Country(): ReactElement {
  return (
    <StyledCountryViewContainer>
      <ErrorContainer
        message={'Cannot find any matching results for your query, please try another one.'}
      />
    </StyledCountryViewContainer>
  );
}
