import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout/Layout';

describe('fetches the data', () => {
  it('fetches from the api 2 times', () => {
    render(<Layout>test</Layout>);
    expect(window.fetch).toBeCalledTimes(2);
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
