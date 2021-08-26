import * as React from 'react';
import { StyledFlagIcon } from './FlagIcon.styles';

interface FlagIconProps {
  src: string;
}

export default function FlagIcon({ src }: FlagIconProps): React.ReactElement {
  return <StyledFlagIcon src={src} />;
}
