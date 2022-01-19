export default function useFetch(input: 'error' | 'fetching'): [null, Error | null, string] {
  console.log('using mock');
  if (input === 'error') {
    return [null, new Error('An error occurred while fetching the data'), input];
  }
  if (input === 'fetching') {
    return [null, null, input];
  }
  return [null, null, input];
}
