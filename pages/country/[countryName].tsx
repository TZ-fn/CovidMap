import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import HeadElement from 'components/Layout/HeadElement/HeadElement';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';
import LoadingSpinner from 'components/Elements/LoadingSpinner/LoadingSpinner';

export const StyledCountryViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  min-width: 95vw;
`;

export default function Country(): ReactElement {
  const router = useRouter();
  const countryName = router.query.countryName;

  return (
    <StyledCountryViewContainer>
      {countryName ? (
        <>
          <HeadElement title={countryName} />
          <CountryDetailsView countryName={countryName} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </StyledCountryViewContainer>
  );
}
