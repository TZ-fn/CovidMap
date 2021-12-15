import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';
import allCountriesNames from '../assets/data/test-mocks/allCountriesNames';

it('renders the SearchBar', () => {
  render(<SearchBar countriesNames={allCountriesNames} />);
  expect(screen.getByPlaceholderText(/Search for a country/)).toBeInTheDocument();
});

it('renders the results list', () => {
  render(<SearchBar countriesNames={allCountriesNames} />);
  const searchBarInput = screen.getByPlaceholderText(/Search for a country/);
  fireEvent.change(searchBarInput, {
    target: { value: 'Poland' },
  });
  expect(screen.getByText(/Poland/)).toBeInTheDocument();
});

// it('renders the results list', () => {
//   render(<SearchBar countriesNames={allCountriesNames} />);
//   const searchBarInput = screen.getByPlaceholderText(/Search for a country/);
//   fireEvent.change(searchBarInput, {
//     target: { value: 'Poland' },
//   });
//   const countryResult = screen.getByText(/Poland/);
//   fireEvent.click(countryResult);
//   console.log(document.body.innerHTML);
//   // expect(screen.getByText(/Poland/)).toBeInTheDocument();
// });
