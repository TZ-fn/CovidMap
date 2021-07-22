import { StyledInput } from './styles';

type InputProps = {
  children: React.ReactNode;
};

export default function Input({ children }: InputProps) {
  return <StyledInput>{children}</StyledInput>;
}
