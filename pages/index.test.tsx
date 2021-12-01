import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

it('renders the loader where there is no data', async () => {
  render(<Home />);
  console.log(document.body.innerHTML);
  expect(await screen.findByText(/Covid-19 Map/, {}, { timeout: 3000 })).toBeInTheDocument();
});
