import formatNumberToPolishLocale from './formatNumberToPolishLocale';

export default function formatObjectNumbersToPolishLocale(object) {
  for (const property in object) {
    if (typeof object[property] === 'number') {
      object[property] = formatNumberToPolishLocale(object[property]);
    }
  }
  return object;
}
