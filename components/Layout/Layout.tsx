import { ReactElement, ReactNode } from 'react';
import { StyledWrapper } from './Layout.styles';
import HeadElement from './HeadElement/HeadElement';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children, themeToggler }: LayoutProps): ReactElement {
  return (
    <StyledWrapper>
      <HeadElement />
      <Header themeToggler={themeToggler} />
      {children}
      <Footer />
    </StyledWrapper>
  );
}
