import { ReactElement } from 'react';
import FlagIcon from 'components/Elements/FlagIcon/FlagIcon';
import { StyledCountriesListItem } from './CountriesListItem.styles';
import Link from 'next/link';
import formatNumberToPolishLocale from 'utils/formatNumberToPolishLocale';

interface CountriesListItemProps {
  countryFlag: string | undefined;
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
          {formatNumberToPolishLocale(numberOfCasesOrVaccineDoses)}
        </StyledCountriesListItem>
      </a>
    </Link>
  );
}
