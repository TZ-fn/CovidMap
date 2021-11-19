import { ReactElement, ChangeEventHandler } from 'react';
import { StyledInput } from './Input.styles';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  id,
  type,
  placeholder,
  value,
  onChange,
}: InputProps): ReactElement {
  return (
    <StyledInput id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
  );
}
