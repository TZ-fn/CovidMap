import '@testing-library/jest-dom';

beforeEach(() => {
  // @ts-ignore
  window.fetch = jest.fn(() => Promise.resolve({}));
});
