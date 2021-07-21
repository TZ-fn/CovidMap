import { StyledWrapper } from './styles';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <StyledWrapper>
      <Header />
      {props.children}
      <Footer />
    </StyledWrapper>
  );
}
