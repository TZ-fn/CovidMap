import React from 'react';
import { render, screen } from '@testing-library/react';
import CountriesList from '../components/Elements/CountriesList/CountriesList';
import covidCasesData from '../assets/data/test-mocks/covidCasesData';
import vaccinesData from '../assets/data/test-mocks/vaccinesData';

it('renders the CountriesList', () => {
  render(<CountriesList covidCasesData={covidCasesData} vaccinesData={vaccinesData} />);
  expect(screen.getAllByRole(/listitem/)).toHaveLength(12);
});
