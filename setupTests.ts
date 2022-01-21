import '@testing-library/jest-dom';
import mockUseFetch from '__tests__/test-mocks/mockUseFetch';

beforeEach(() => {
  jest.mock('hooks/useFetch', () => jest.fn(() => mockUseFetch('error')));
});
