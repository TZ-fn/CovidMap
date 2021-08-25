import { StyledFlagIcon } from './FlagIcon.styles';

interface FlagIconProps {
  src: string;
}

export default function FlagIcon({ src }: FlagIconProps) {
  return <StyledFlagIcon src={src} />;
}
