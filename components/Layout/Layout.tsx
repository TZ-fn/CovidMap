import { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import { StyledWrapper } from './Layout.styles';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useFetch } from 'hooks/useFetch';
import { VACCINES_DATA, ALL_COUNTRIES_DATA } from 'assets/data/APIs';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  const [vaccinesData] = useFetch(VACCINES_DATA);
  const [covidCasesData] = useFetch(ALL_COUNTRIES_DATA);
  const countriesNames =
    'map' in covidCasesData ? covidCasesData.map((country) => country.country) : [''];

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        vaccinesData: vaccinesData,
        covidCasesData: covidCasesData,
      });
    }
  });

  return (
    <StyledWrapper>
      <Header countriesNames={countriesNames} />
      {childrenWithProps}
      <Footer />
    </StyledWrapper>
  );
}
