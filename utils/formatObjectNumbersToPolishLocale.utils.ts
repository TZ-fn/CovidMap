import formatNumberToPolishLocale from './formatNumberToPolishLocale';

export default function formatObjectNumbersToPolishLocale<T>(object: T): T {
  const formattedObject = object;
  for (const property in object) {
    if (typeof object[property] === 'number') {
      // @ts-ignore
      formattedObject[property] = formatNumberToPolishLocale(object[property] as unknown as number);
    }
  }
  return formattedObject;
}
