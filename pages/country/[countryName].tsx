import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import HeadElement from 'components/Layout/HeadElement/HeadElement';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';

export default function Country(): ReactElement | string {
  const router = useRouter();
  const countryName = router.query.countryName;

  return countryName ? (
    <>
      <HeadElement title={countryName} />
      <CountryDetailsView countryName={countryName} />
    </>
  ) : (
    'Loading ...'
  );
}
