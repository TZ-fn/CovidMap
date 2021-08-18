import { StyledFlagIcon } from './FlagIcon.styles';

type FlagIconProps = {
  src: string;
};

export default function FlagIcon({ src }: FlagIconProps) {
  return <StyledFlagIcon src={src} />;
}
