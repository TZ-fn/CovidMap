import { ReactElement } from 'react';
import { StyledFlagIcon } from './FlagIcon.styles';

interface FlagIconProps {
  src: string | undefined;
}

export default function FlagIcon({ src }: FlagIconProps): ReactElement {
  return <StyledFlagIcon src={src} />;
}
