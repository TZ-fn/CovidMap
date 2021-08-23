export async function fetchData(API: string) {
  try {
    const response = await fetch(API);
    return response.json();
  } catch (error) {
    return error;
  }
}

// Convert the country objects received from the API into tuples containing the country's name and number of vaccine doses administered, so they can be sorted more easily sorted

function createCountriesTuples(countriesData) {
  return countriesData.map((country) => {
    return [country.country, Object.values(country.timeline)[0]];
  });
}

export function sortCountriesByVaccineDoses(data, numberOfResults: number) {
  return createCountriesTuples(data)
    .sort((country1, country2) => country2[1] - country1[1])
    .slice(0, numberOfResults);
}
