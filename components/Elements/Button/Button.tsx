import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <StyledButton className={className} type='button'>
      {children}
    </StyledButton>
  );
}
