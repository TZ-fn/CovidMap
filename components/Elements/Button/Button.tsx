import { StyledButton } from './styles';

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  return <StyledButton type='button'>{props.children}</StyledButton>;
}
