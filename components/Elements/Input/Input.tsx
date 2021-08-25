import { StyledInput } from './Input.styles';

interface InputProps {
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: InputProps) {
  return <StyledInput type={type} placeholder={placeholder} />;
}
