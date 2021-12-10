import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import covidCasesData from '../assets/data/test-mocks/covidCasesData';
import vaccinesData from '../assets/data/test-mocks/vaccinesData';

it('renders the main component', () => {
  render(<Home />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});

it('does not render the rankings where there is not data', () => {
  render(<Home vaccinesData={null} covidCasesData={null} />);
  expect(screen.queryByText(/Covid-19 cases worldwide/)).not.toBeInTheDocument();
});

it('renders the loader when there is no data', () => {
  render(<Home vaccinesData={null} covidCasesData={null} />);
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});

it('renders both rankings when passed correct data', () => {
  render(<Home vaccinesData={vaccinesData} covidCasesData={covidCasesData} />);
  expect(screen.queryByText(/Vaccine doses administered/)).toBeInTheDocument();
  expect(screen.queryByText(/Covid-19 cases worldwide/)).toBeInTheDocument();
});
