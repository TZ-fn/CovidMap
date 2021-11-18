import { ReactElement, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
}

export default function Button({
  children,
  className,
  type = 'button',
  ariaLabel,
}: ButtonProps): ReactElement {
  return (
    <StyledButton className={className} aria-label={ariaLabel} type={type}>
      {children}
    </StyledButton>
  );
}
