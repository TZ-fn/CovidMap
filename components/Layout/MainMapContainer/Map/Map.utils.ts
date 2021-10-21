import countryNamesFromCovidData, { CountryNameFromMap } from 'assets/data/countryNames';
import { CovidCasesDataForCountry } from 'utils/APIdata.types';
import casesToColorMap from 'assets/data/casesToColorMap';
import { ThemeType } from 'theme/themeTypes';

export const mapCountriesNamesToCovidDataCountries = (countryNameFromMap: string): string => {
  if (countryNamesFromCovidData[countryNameFromMap as CountryNameFromMap]) {
    return countryNamesFromCovidData[countryNameFromMap as CountryNameFromMap];
  } else {
    return countryNameFromMap;
  }
};

export const mapCountryToNumberOfCases = (
  countryNameFromMap: string,
  covidCasesData: CovidCasesDataForCountry[],
): number | string => {
  return (
    covidCasesData?.find(
      (CovidCasesDataForCountry) =>
        CovidCasesDataForCountry.country ===
        mapCountriesNamesToCovidDataCountries(countryNameFromMap),
    )?.cases || 'No data available.'
  );
};

export const mapNumberOfCasesToColor = (
  numberOfCases: number | string,
  theme: ThemeType,
): string => {
  switch (true) {
    case numberOfCases > casesToColorMap[0]:
      return theme.dataColors.AstronautBlue;
    case numberOfCases > casesToColorMap[1]:
      return theme.dataColors.Chambray;
    case numberOfCases > casesToColorMap[2]:
      return theme.dataColors.ButterflyBush;
    case numberOfCases > casesToColorMap[3]:
      return theme.dataColors.Tapestry;
    case numberOfCases > casesToColorMap[4]:
      return theme.dataColors.Cranberry;
    case numberOfCases > casesToColorMap[5]:
      return theme.dataColors.Carnation;
    case numberOfCases > casesToColorMap[6]:
      return theme.dataColors.Coral;
    case numberOfCases > casesToColorMap[7]:
      return theme.dataColors.WebOrange;
    case numberOfCases > casesToColorMap[8]:
      return theme.dataColors.LighterWebOrange;
    default:
      return theme.dataColors.NoData;
  }
};
