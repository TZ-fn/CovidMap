interface VaccinesDataForCountry {
  country: string;
  timeline: {
    [date: string]: number;
  };
}

type VaccinesData = VaccinesDataForCountry[];

type VaccineDosesInCountry = [string, number];

export async function fetchData(
  API: string,
  setterFunction?: Function,
): Promise<void | VaccinesData | Error> {
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

function createCountriesTuples(countriesData: VaccinesData): VaccineDosesInCountry[] {
  return countriesData.map((country) => {
    return [country.country, Object.values(country.timeline)[0]];
  });
}

export function sortCountriesByVaccineDoses(
  data: VaccinesData,
  numberOfResults: number,
): VaccineDosesInCountry[] {
  return createCountriesTuples(data)
    .sort((country1, country2) => country2[1] - country1[1])
    .slice(0, numberOfResults);
}
