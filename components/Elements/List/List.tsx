import { ReactElement } from 'react';
import { sortCountries } from 'utils/utils';
import CountriesListItem from 'components/CountriesListItem/CountriesListItem';
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
      {/* {console.log(
        'data: ',
        createCountryObjectsFunction(sortCountries(countryObjectArray, 12, sortByFunction)),
      )} */}
      {/* {console.log('data>0', countryObjectArray.length > 0)} */}
      {countryObjectArray.length > 0 &&
        createCountryObjectsFunction(sortCountries(countryObjectArray, 12, sortByFunction))?.map(
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
