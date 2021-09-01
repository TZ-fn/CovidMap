import { ReactElement } from 'react';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
import { useEffect, useState } from 'react';
import { fetchData, sortCountries } from 'utils/utils';
import { StyledList } from './List.styles';

interface CovidCasesInCountry {
  countryName: string;
  covidCases: number;
  countryFlag: string;
}

export default function CovidCasesList(): ReactElement {
  const [covidCasesData, setCovidCasesData] = useState([]);

  useEffect(() => {
    fetchData('https://disease.sh/v3/covid-19/countries', setCovidCasesData);
  }, []);

  return (
    <StyledList>
      {covidCasesData?.length > 0
        ? sortCountries(covidCasesData, 12, true).map(
            ({ countryName, covidCases, countryFlag }: CovidCasesInCountry) => {
              return (
                <CountriesListItem
                  key={countryName}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  numberOfCasesOrVaccineDoses={covidCases}
                />
              );
            },
          )
        : null}
    </StyledList>
  );
}
