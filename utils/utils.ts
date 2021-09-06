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
  console.log(data.sort(sortBy).slice(0, numberOfResults));
  return data.sort(sortBy).slice(0, numberOfResults);
}
