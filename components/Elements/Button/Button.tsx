import { StyledButton } from './Button.styles';

export default function Button({ children, className }) {
  return (
    <StyledButton className={className} type='button'>
      {children}
    </StyledButton>
  );
}
