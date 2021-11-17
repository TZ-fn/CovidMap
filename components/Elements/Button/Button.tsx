import { ReactElement, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function Button({ children, className, ariaLabel }: ButtonProps): ReactElement {
  return (
    <StyledButton className={className} aria-label={ariaLabel} type='button'>
      {children}
    </StyledButton>
  );
}
