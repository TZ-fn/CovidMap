import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout/Layout';

window.fetch = jest.fn();

describe('fetches the data correctly', () => {
  it('renders the header correctly', () => {
    jest.spyOn(window, 'fetch');
    render(<Layout>test</Layout>);
    expect(window.fetch).toBeCalledTimes(2);
  });
});

describe('renders correctly', () => {
  it('renders the header correctly', () => {
    render(<Layout>test</Layout>);
    expect(screen.getByRole(/banner/)).toBeInTheDocument();
  });

  it('renders the footer correctly', () => {
    render(<Layout>test</Layout>);
    expect(screen.getByRole(/contentinfo/)).toBeInTheDocument();
  });
});
