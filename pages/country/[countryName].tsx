import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

export default function Country(): ReactElement {
  const router = useRouter();
  const countryName = router.query.countryName;
  return (
    <div>Country: {countryName && countryName.charAt(0).toUpperCase() + countryName.slice(1)}</div>
  );
}
