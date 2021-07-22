import { StyledButton } from './styles';

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <StyledButton type='button'>{children}</StyledButton>;
}
