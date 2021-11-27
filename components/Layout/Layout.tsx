import { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import { StyledWrapper } from './Layout.styles';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useFetch } from 'hooks/useFetch';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  const [vaccinesData] = useFetch(
    'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false',
  );
  const [covidCasesData] = useFetch('https://disease.sh/v3/covid-19/countries');
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
