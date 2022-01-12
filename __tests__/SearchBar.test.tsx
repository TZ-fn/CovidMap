import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from 'components/SearchBar/SearchBar';
import allCountriesNames from '__tests__/test-mocks/allCountriesNames';
import { createMockRouter } from '__tests__/test-mocks/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

const router = createMockRouter();

it('renders the SearchBar', () => {
  render(<SearchBar countriesNames={allCountriesNames} />);
  expect(screen.getByRole('searchbox', { name: /search for a country/i })).toBeInTheDocument();
});

it('renders the results list', () => {
  render(<SearchBar countriesNames={allCountriesNames} />);
  const searchBarInput = screen.getByRole('searchbox', { name: /search for a country/i });
  userEvent.type(searchBarInput, 'Poland');
  expect(screen.getByText(/Poland/)).toBeInTheDocument();
});

it('checks if pressing ArrowDown works properly with the search results list', () => {
  render(<SearchBar countriesNames={allCountriesNames} />);
  const searchBarInput = screen.getByRole('searchbox', { name: /search for a country/i });
  userEvent.type(searchBarInput, 'Port');
  userEvent.keyboard('{arrowdown}');
  expect(searchBarInput).toHaveValue('Portugal');
});

it('checks if SearchButton works properly', () => {
  render(
    <RouterContext.Provider value={router}>
      <SearchBar countriesNames={allCountriesNames} />
    </RouterContext.Provider>,
  );

  const userInput = 'Poland';
  const searchBarInput = screen.getByRole('searchbox', { name: /search for a country/i });
  const searchButton = screen.getByRole('button', { name: /search button/i });

  userEvent.type(searchBarInput, userInput);
  userEvent.click(searchButton);

  expect(router.push).toHaveBeenCalledWith(`/country/${userInput}`);
});

it('checks if Enter key works properly', () => {
  render(
    <RouterContext.Provider value={router}>
      <SearchBar countriesNames={allCountriesNames} />
    </RouterContext.Provider>,
  );

  const userInput = 'Poland';
  const searchBarInput = screen.getByRole('searchbox', { name: /search for a country/i });

  userEvent.type(searchBarInput, userInput);
  userEvent.keyboard('{Enter}');

  expect(router.push).toHaveBeenCalledWith(`/country/${userInput}`);
});
