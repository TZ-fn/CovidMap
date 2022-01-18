export default function useFetch(input: 'error' | 'fetching'): [null, Error | null, string] {
  if (input === 'error') {
    return [null, new Error('An error occurred while fetching the data'), input];
  }
  if (input === 'fetching') {
    return [null, null, input];
  }
  return [null, null, input];
}
