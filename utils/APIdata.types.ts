export interface VaccinesDataForCountry {
  country: string;
  timeline: {
    [date: string]: number;
  };
}

export interface CovidCasesDataForCountry {
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

export interface HistoricalDataForCountry {
  country: string;
  province: [string];
  timeline: {
    cases: TimelineData;
    deaths: TimelineData;
    recovered: TimelineData;
  };
}

export type TimelineData = Record<string, number>;

export type VaccinesData = VaccinesDataForCountry[];
export type CovidCasesData = CovidCasesDataForCountry[];
