import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';
import mockUseFetch from './test-mocks/mockUseFetch';

const countryName = 'Poland';

jest.mock('./test-mocks/mockUseFetch', () => ({
  useFetch: mockUseFetch('error'),
}));

it('renders the loader', () => {
  render(<CountryDetailsView countryName={countryName} />);
  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
});

it('renders the error message when there is data fetching error', async () => {
  render(<CountryDetailsView countryName={countryName} />);
  expect(await screen.findByText(/'An error occurred while fetching the data/)).toBeInTheDocument();
});
