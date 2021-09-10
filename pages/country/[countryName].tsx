import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';

export default function Country(): ReactElement {
  const router = useRouter();
  const countryName = router.query.countryName;
  return (
    <>
      <CountryDetailsView countryName={countryName} />
    </>
  );
}
