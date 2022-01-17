export default function useFetch(input: string): [null, Error | null, string] {
  if (input === 'error') {
    return [null, null, 'sad'];
  }
  if (input === 'fetching') {
    return [null, null, 'sad'];
  }
  return [null, null, 'default'];
}
