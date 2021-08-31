import { ReactElement, ReactNode } from 'react';
import { StyledAside } from './Aside.styles';

interface AsideProps {
  className?: string;
  children: ReactNode;
}

export default function Aside({ className, children }: AsideProps): ReactElement {
  return <StyledAside className={className}>{children}</StyledAside>;
}
