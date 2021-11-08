export default function formatNumberToPolishLocale(number: number): string {
  return new Intl.NumberFormat('pl-PL').format(number);
}
