import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

it('does not render the rankings where there is not data', () => {
  render(<Home />);
  expect(screen.queryByText(/Covid-19 cases worldwide/)).not.toBeInTheDocument();
});

it('renders the main component', () => {
  render(<Home />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});

it('renders the loader when there is no data', () => {
  render(<Home />);
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});
