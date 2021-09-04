interface VaccinesDataForCountry {
  country: string;
  timeline: {
    [date: string]: number;
  };
}

interface CovidCasesDataForCountry {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

type VaccinesData = VaccinesDataForCountry[];
type CovidCasesData = CovidCasesDataForCountry[];

export async function fetchData(
  API: string,
  setterFunction?: Function,
): Promise<void | VaccinesData | CovidCasesData | Error> {
  try {
    const response = await fetch(API);
    const data = await response.json();
    if (setterFunction) {
      setterFunction(data);
    }
    return data;
  } catch (error) {
    return error;
  }
}

// Convert the country objects received from the API into tuples containing the country's name and number of vaccine doses administered, so they can be sorted more easily sorted

interface VaccineDosesInCountry {
  countryName: string;
  vaccineDoses: number;
  countryFlag?: string;
}

export function createVaccineCountriesObjects(
  countriesData: VaccinesData,
  covidCasesData: CovidCasesData,
): VaccineDosesInCountry[] {
  // return countriesData?.map((country) => {
  //   const countryFlag = covidCasesData.filter(
  //     (countryWithFlag: CovidCasesDataForCountry) => countryWithFlag.country === country.country,
  //   );
  //   return {
  //     countryName: country.country,
  //     vaccineDoses: Object.values(country.timeline)[0],
  //     countryFlag: countryFlag[0].countryInfo.flag,
  //   };
  // });
}

interface CovidCasesInCountry {
  countryName: string;
  number: number;
  countryFlag: string;
}

export function createCovidCasesCountriesObjects(
  countriesData: CovidCasesData,
): CovidCasesInCountry[] {
  return countriesData.map((country) => {
    return {
      countryName: country.country,
      number: country.cases,
      countryFlag: country.countryInfo.flag,
    };
  });
}

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
): VaccinesDataForCountry | CovidCasesDataForCountry {
  console.log(data.sort(sortBy).slice(0, numberOfResults));
  return data.sort(sortBy).slice(0, numberOfResults);
}
