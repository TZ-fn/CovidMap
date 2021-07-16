import { StyledWrapper } from './styles';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <StyledWrapper>
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  );
}
