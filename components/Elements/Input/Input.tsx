import { ReactElement, ChangeEventHandler, KeyboardEventHandler, FocusEventHandler } from 'react';
import { StyledInput } from './Input.styles';

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value?: string;
  autocomplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;

  name?: string;
}

export default function Input({
  id,
  type,
  placeholder,
  value,
  autocomplete,
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  name,
}: InputProps): ReactElement {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      autoComplete={autocomplete}
    />
  );
}
