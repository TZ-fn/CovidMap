import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import covidCasesData from './test-mocks/covidCasesData';
import vaccinesData from './test-mocks/vaccinesData';

function renderHomeWithNoData() {
  //@ts-expect-error no data should be passed
  render(<Home vaccinesData={null} covidCasesData={null} />);
}

it('renders the main component', () => {
  renderHomeWithNoData();
  expect(screen.getByRole('main')).toBeInTheDocument();
});

it('does not render the rankings where there is not data', () => {
  renderHomeWithNoData();
  expect(screen.queryByText(/Covid-19 cases worldwide/)).not.toBeInTheDocument();
});

it('renders the loader when there is no data', () => {
  renderHomeWithNoData();
  expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
});

it('renders both rankings when passed correct data', () => {
  render(<Home vaccinesData={vaccinesData} covidCasesData={covidCasesData} />);
  expect(screen.queryByText(/Vaccine doses administered/)).toBeInTheDocument();
  expect(screen.queryByText(/Covid-19 cases worldwide/)).toBeInTheDocument();
});
