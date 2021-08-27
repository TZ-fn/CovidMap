import React, { ReactElement } from 'react';
import FlagIcon from 'components/FlagIcon/FlagIcon';
import { StyledCountriesListItem } from './CountriesListItem.styles';

interface CountriesListItemProps {
  countryFlag: string;
  countryName: string;
  numberOfCases: number;
}

export default function CountriesListItem({
  countryFlag,
  countryName,
  numberOfCases,
}: CountriesListItemProps): ReactElement {
  return (
    <StyledCountriesListItem>
      <FlagIcon src={countryFlag} /> {countryName} {numberOfCases}
    </StyledCountriesListItem>
  );
}
