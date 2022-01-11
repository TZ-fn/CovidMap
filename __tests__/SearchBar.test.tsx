import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  userEvent.type(searchBarInput, 'Poland');
  expect(screen.getByText(/Poland/)).toBeInTheDocument();
});

it('checks if pressing ArrowDown works properly with the search results list', () => {
  render(<SearchBar countriesNames={allCountriesNames} />);
  const searchBarInput = screen.getByPlaceholderText(/Search for a country/);
  userEvent.type(searchBarInput, 'Port');
  userEvent.keyboard('{arrowdown}');
  expect(searchBarInput).toHaveValue('Portugal');
});

it('checks if the routing works', () => {
  const push = jest.fn();
  useRouter.mockImplementation(() => ({ push }));

  render(<SearchBar countriesNames={allCountriesNames} />);
  const searchBarInput = screen.getByPlaceholderText(/Search for a country/);
  userEvent.type(searchBarInput, 'Poland');

  const countryResult = screen.getByText(/Poland/);

  userEvent.click(countryResult);
  expect(push).toHaveBeenCalledWith('/Poland/');
});
