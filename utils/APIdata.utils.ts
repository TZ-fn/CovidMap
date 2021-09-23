import { VaccinesDataForCountry, CovidCasesDataForCountry } from './APIdata.types';

export interface sortByVaccineDosesType {
  (a: VaccinesDataForCountry, b: VaccinesDataForCountry): number;
}

export interface sortByCovidCasesType {
  (a: CovidCasesDataForCountry, b: CovidCasesDataForCountry): number;
}

export const sortByVaccineDoses = (a: VaccinesDataForCountry, b: VaccinesDataForCountry): number =>
  Object.values(b.timeline)[0] - Object.values(a.timeline)[0];

export const sortByCovidCases = (
  a: CovidCasesDataForCountry,
  b: CovidCasesDataForCountry,
): number => b.cases - a.cases;

export function sortCountries(
  data: VaccinesDataForCountry[] | CovidCasesDataForCountry[],
  numberOfResults: number,
  sortBy: sortByVaccineDosesType | sortByCovidCasesType,
): typeof data {
  return data.sort((a, b) => sortBy(a, b)).slice(0, numberOfResults);
}
