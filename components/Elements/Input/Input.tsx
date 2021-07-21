import { StyledInput } from './styles';

type InputProps = {
  children: React.ReactNode;
};

export default function Input(props: InputProps) {
  return <StyledInput>{props.children}</StyledInput>;
}
