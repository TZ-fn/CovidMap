import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';
import allCountriesNames from '../assets/data/test-mocks/allCountriesNames';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

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

it('checks if ArrowDown works properly with the search results list', () => {
  render(<SearchBar countriesNames={allCountriesNames} />);
  const searchBarInput = screen.getByPlaceholderText(/Search for a country/);
  fireEvent.change(searchBarInput, {
    target: { value: 'Poland' },
  });
  fireEvent.keyDown(searchBarInput, { key: 'ArrowDown', code: 'ArrowDown', charCode: 40 });
  expect(searchBarInput).toHaveValue('Poland');
});

it('renders the results list', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({ push }));

  render(<SearchBar countriesNames={allCountriesNames} />);
  const searchBarInput = screen.getByPlaceholderText(/Search for a country/);
  fireEvent.change(searchBarInput, {
    target: { value: 'Poland' },
  });

  const countryResult = screen.getByText(/Poland/);

  fireEvent.click(countryResult);
  expect(push).toHaveBeenCalledWith('/Poland/');
});
