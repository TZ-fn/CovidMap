import React from 'react';
import { render, screen } from '@testing-library/react';
import CountriesList from '../components/Elements/CountriesList/CountriesList';
import covidCasesData from './test-mocks/covidCasesData';
import vaccinesData from './test-mocks/vaccinesData';

it('renders the CountriesList with correct length', () => {
  render(<CountriesList covidCasesData={covidCasesData} vaccinesData={vaccinesData} />);
  expect(screen.getAllByRole(/listitem/)).toHaveLength(12);
});
