import * as React from 'react';
import { StyledWrapper } from './Layout.styles';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <StyledWrapper>
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  );
}
