import { StyledAside } from './Aside.styles';

interface AsideProps {
  className?: string;
  children: React.ReactNode;
}

export default function Aside({ className, children }: AsideProps) {
  return <StyledAside className={className}>{children}</StyledAside>;
}
