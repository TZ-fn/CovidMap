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
}

function createVaccineCountriesTuples(countriesData: VaccinesData): VaccineDosesInCountry[] {
  return countriesData.map((country) => {
    return { countryName: country.country, vaccineDoses: Object.values(country.timeline)[0] };
  });
}

interface CovidCasesInCountry {
  countryName: string;
  covidCases: number;
  countryFlag: string;
}

function createCovidCasesCountriesTuples(countriesData: CovidCasesData): CovidCasesInCountry[] {
  return countriesData.map((country) => {
    return {
      countryName: country.country,
      covidCases: country.cases,
      countryFlag: country.countryInfo.flag,
    };
  });
}

export function sortCountries(
  data: CovidCasesData | VaccinesData,
  numberOfResults: number,
  isCasesData: boolean,
): VaccineDosesInCountry[] | CovidCasesInCountry[] {
  if (isCasesData) {
    return createCovidCasesCountriesTuples(data)
      .sort((country1, country2) => country2.covidCases - country1.covidCases)
      .slice(0, numberOfResults);
  } else {
    return createVaccineCountriesTuples(data)
      .sort((country1, country2) => country2.vaccineDoses - country1.vaccineDoses)
      .slice(0, numberOfResults);
  }
}
