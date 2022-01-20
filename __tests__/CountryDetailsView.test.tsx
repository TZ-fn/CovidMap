import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';
import { useFetch } from 'hooks/useFetch';

const countryName = 'Poland';

jest.mock('hooks/useFetch', () => {
  return jest.fn(() => [[null, new Error('An error occurred while fetching the data'), 'error']]);
});

jest.isMockFunction(useFetch);

it('renders the loader', () => {
  render(<CountryDetailsView countryName={countryName} />);
  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
});

it('renders the error message when there is data fetching error', async () => {
  render(<CountryDetailsView countryName={countryName} />);
  expect(
    await screen.findByText(
      /'An error occurred while fetching the data/,
      {},
      {
        timeout: 2000,
      },
    ),
  ).toBeInTheDocument();
});
