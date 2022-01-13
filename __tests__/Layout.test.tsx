import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout/Layout';
import { VACCINES_DATA, ALL_COUNTRIES_DATA } from 'assets/data/APIs';

describe('fetches the data', () => {
  it('fetches from the correct APIs 2 times', () => {
    render(<Layout>test</Layout>);
    expect(window.fetch).toBeCalledTimes(2);
    expect(window.fetch).toBeCalledWith(VACCINES_DATA);
    expect(window.fetch).toBeCalledWith(ALL_COUNTRIES_DATA);
  });
});

describe('renders header and footer', () => {
  it('renders the header', () => {
    render(<Layout>test</Layout>);
    expect(screen.getByRole(/banner/)).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<Layout>test</Layout>);
    expect(screen.getByRole(/contentinfo/)).toBeInTheDocument();
  });
});
