import { VaccinesDataForCountry, CovidCasesDataForCountry } from './APIdata.types';

export const sortByVaccineDoses = (a: VaccinesDataForCountry, b: VaccinesDataForCountry): number =>
  Object.values(b.timeline)[0] - Object.values(a.timeline)[0];

export const sortByCovidCases = (
  a: CovidCasesDataForCountry,
  b: CovidCasesDataForCountry,
): number => b.cases - a.cases;

export function sortCountries<APIdata>(
  data: APIdata[],
  numberOfResults: number,
  sortBy: Function,
): APIdata[] {
  return data.sort((a, b) => sortBy(a, b)).slice(0, numberOfResults);
}
