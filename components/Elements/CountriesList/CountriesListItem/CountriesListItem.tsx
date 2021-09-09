import { ReactElement } from 'react';
import FlagIcon from 'components/Elements/FlagIcon/FlagIcon';
import { StyledCountriesListItem } from './CountriesListItem.styles';
import Link from 'next/link';

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
    <Link href={'/country/' + countryName.toLocaleLowerCase()}>
      <a>
        <StyledCountriesListItem>
          <FlagIcon src={countryFlag} /> {countryName}{' '}
          {new Intl.NumberFormat('pl-PL').format(numberOfCasesOrVaccineDoses)}
        </StyledCountriesListItem>
      </a>
    </Link>
  );
}
