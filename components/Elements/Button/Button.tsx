import { ReactElement, ReactNode, MouseEventHandler } from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  className,
  type = 'button',
  ariaLabel,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <StyledButton className={className} aria-label={ariaLabel} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
