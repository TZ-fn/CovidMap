import { VaccinesDataForCountry, CovidCasesDataForCountry } from './APIdata.types';

export function sortCountries(
  covidCasesData: CovidCasesDataForCountry[],
  numberOfResults: number,
  vaccinesData?: VaccinesDataForCountry[],
): CovidCasesDataForCountry[] | VaccinesDataForCountry[] {
  if (vaccinesData) {
    return vaccinesData
      .sort((a, b) => Object.values(b.timeline)[0] - Object.values(a.timeline)[0])
      .slice(0, numberOfResults);
  } else {
    return covidCasesData.sort((a, b) => b.cases - a.cases).slice(0, numberOfResults);
  }
}
