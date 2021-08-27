import React, { ReactElement } from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps): ReactElement {
  return (
    <StyledButton className={className} type='button'>
      {children}
    </StyledButton>
  );
}
