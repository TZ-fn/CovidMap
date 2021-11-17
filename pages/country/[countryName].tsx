import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { StyledCountryViewContainer } from './Country.style';
import HeadElement from 'components/Layout/HeadElement/HeadElement';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';
import LoadingSpinner from 'components/Elements/LoadingSpinner/LoadingSpinner';

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
