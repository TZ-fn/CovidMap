import { ReactElement } from 'react';
import { sortCountries } from 'utils/utils';
import { StyledList } from './List.styles';

interface countryObject {
  countryName: string;
  covidCases: number;
  countryFlag: string;
}

interface ListProps {
  countryObjectArray: countryObject[];
  sortByFunction: Function;
  createCountryObjectsFunction: Function;
}

export default function List({
  countryObjectArray,
  sortByFunction,
  createCountryObjectsFunction,
}: ListProps): ReactElement {
  return (
    <StyledList>
      {countryObjectArray.length > 0 &&
        console.log(
          createCountryObjectsFunction(sortCountries(countryObjectArray, 12, sortByFunction)),
        )}
      {/* {countryObjectArray?.length > 0
        ? sortCountries(countryObjectArray, 12, sortByFunction).map(
            ({ countryName, number, countryFlag }: countryObject) => {
              return (
                <CountriesListItem
                  key={countryName}
                  countryFlag={countryFlag}
                  countryName={countryName}
                  numberOfCasesOrVaccineDoses={number}
                />
              );
            },
          )
        : null} */}
    </StyledList>
  );
}
