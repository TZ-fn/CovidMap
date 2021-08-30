import React, { ReactElement } from 'react';
import FlagIcon from 'components/FlagIcon/FlagIcon';
import { StyledCountriesListItem } from './CountriesListItem.styles';

interface CountriesListItemProps {
  countryFlag: string;
  countryName: string;
  numberOfCasesOrVaccineDoses: number;
}

export default function CountriesListItem({
  countryFlag,
  countryName,
  numberOfCasesOrVaccineDoses,
}: CountriesListItemProps): ReactElement {
  return (
    <StyledCountriesListItem>
      <FlagIcon src={countryFlag} /> {countryName}{' '}
      {new Intl.NumberFormat('pl-PL').format(numberOfCasesOrVaccineDoses)}
    </StyledCountriesListItem>
  );
}
