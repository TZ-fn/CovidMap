import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CountryDetailsView from 'views/CountryDetailsView/CountryDetailsView';

const countryName = 'Poland';

beforeEach(() => {
  global.fetch = jest.fn((ApiQuery) => {
    switch (ApiQuery) {
      case 'disease.sh/v3/covid-19/historical/ServerError?lastdays=360':
        return Promise.resolve({
          status: 404,
          json: () =>
            Promise.resolve({
              response: 'Error',
              message: 'An error occurred while fetching the data',
            }),
        } as Response);

      default:
        return Promise.resolve({
          status: 200,
          json: () =>
            Promise.resolve({
              response: 'default',
              message: 'default',
            }),
        } as Response);
    }
  });
});

it('renders the loader', () => {
  render(<CountryDetailsView countryName={countryName} />);
  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
});

it('renders the error message when there is data fetching error', async () => {
  render(<CountryDetailsView countryName={'ServerError'} />);
  waitFor(() => {
    expect(
      screen.getByText(/country not found or doesn't have any historical data/i),
    ).toBeInTheDocument();
  });
});
