import { Children, cloneElement, ReactElement, ReactNode, useEffect, useState } from 'react';
import { StyledWrapper } from './Layout.styles';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { fetchData } from 'utils/fetchData.utils';
import { CovidCasesData, VaccinesData } from 'utils/APIdata.types';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  const [vaccinesData, setVaccinesData] = useState<[] | VaccinesData>([]);
  const [covidCasesData, setCovidCasesData] = useState<[] | CovidCasesData>([]);

  const countriesNames = covidCasesData.map((country) => {
    return country.country;
  });

  const childrenWithProps = Children.map(children, (child) => {
    return cloneElement(child, {
      vaccinesData: vaccinesData,
      covidCasesData: covidCasesData,
    });
  });

  useEffect(() => {
    fetchData(
      'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false',
      setVaccinesData,
    );
    fetchData('https://disease.sh/v3/covid-19/countries', setCovidCasesData);
  }, []);

  return (
    <StyledWrapper>
      <Header countriesNames={countriesNames} />
      {childrenWithProps}
      <Footer />
    </StyledWrapper>
  );
}
