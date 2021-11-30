import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

it('renders the main page', async () => {
  render(<Home />);
  expect(await screen.findByText(/Covid-19 Map/, {}, { timeout: 3000 })).toBeInTheDocument();
});
