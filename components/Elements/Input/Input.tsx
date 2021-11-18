import { ReactElement } from 'react';
import { StyledInput } from './Input.styles';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
}

export default function Input({ id, type, placeholder }: InputProps): ReactElement {
  return <StyledInput type={type} placeholder={placeholder} id={id} />;
}
