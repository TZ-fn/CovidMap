import { ReactElement } from 'react';
import { StyledFlagIcon } from './FlagIcon.styles';

interface FlagIconProps {
  src: string | undefined;
  countryName: string | undefined;
}

export default function FlagIcon({ src, countryName }: FlagIconProps): ReactElement {
  return <StyledFlagIcon src={src} alt={`Flag of ${countryName}`} />;
}
