import { ReactElement, ReactNode } from 'react';
import { StyledWrapper } from './Layout.styles';
import HeadElement from './HeadElement/HeadElement';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <StyledWrapper>
      <HeadElement />
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  );
}
