import { ReactElement } from 'react';
import { StyledInput } from './Input.styles';

interface InputProps {
  type: string;
  placeholder: string;
}

export default function Input({ type, placeholder }: InputProps): ReactElement {
  return <StyledInput type={type} placeholder={placeholder} />;
}
