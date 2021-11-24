export default function capitalise(string: string): string {
  if (string.toLocaleLowerCase() === 'usa' || string.toLocaleLowerCase() === 'uk') {
    return string.toUpperCase();
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
