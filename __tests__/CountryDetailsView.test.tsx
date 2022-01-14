import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';

const countryName = 'Poland';

it('renders the loader', () => {
  render(<CountryDetailsView countryName={countryName} />);
  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
});
