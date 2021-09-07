import {
  VaccinesDataForCountry,
  CovidCasesDataForCountry,
  VaccinesData,
  CovidCasesData,
} from './APIdata.types';

export const sortByVaccineDoses = (a: VaccinesDataForCountry, b: VaccinesDataForCountry): number =>
  Object.values(b.timeline)[0] - Object.values(a.timeline)[0];

export const sortByCovidCases = (
  a: CovidCasesDataForCountry,
  b: CovidCasesDataForCountry,
): number => b.cases - a.cases;

export function sortCountries(
  data: CovidCasesData | VaccinesData,
  numberOfResults: number,
  sortBy: Function,
): CovidCasesData | VaccinesData {
  return data.sort((a, b) => sortBy(a, b)).slice(0, numberOfResults);
}
