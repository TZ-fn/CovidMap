import countryNamesFromCovidData from 'assets/data/countryNames';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';
import { ThemeType } from 'theme/themeTypes';

export const mapCountriesNamesToCovidDataCountries = (countryNameFromMap: string): string => {
  if (countryNamesFromCovidData[countryNameFromMap]) {
    return countryNamesFromCovidData[countryNameFromMap];
  } else {
    return countryNameFromMap;
  }
};

export const mapCountryToNumberOfCases = (
  countryNameFromMap: string,
  covidCasesData: CovidCasesDataForCountry[],
): number => {
  return covidCasesData.filter(
    (CovidCasesDataForCountry) =>
      CovidCasesDataForCountry.country ===
      mapCountriesNamesToCovidDataCountries(countryNameFromMap),
  )[0]?.cases;
};

export const mapNumberOfCasesToColor = (numberOfCases: number, theme: ThemeType): string => {
  switch (true) {
    case numberOfCases > 10000000:
      return theme.dataColors.WebOrange;
    case numberOfCases > 5000000:
      return theme.dataColors.Coral;
    case numberOfCases > 2500000:
      return theme.dataColors.Carnation;
    case numberOfCases > 1000000:
      return theme.dataColors.Cranberry;
    case numberOfCases > 100000:
      return theme.dataColors.Tapestry;
    case numberOfCases > 10000:
      return theme.dataColors.ButterflyBush;
    case numberOfCases > 1000:
      return theme.dataColors.Chambray;
    case numberOfCases > 100:
      return theme.dataColors.AstronautBlue;
    default:
      return theme.dataColors.NoData;
  }
};
