import { ReactElement, useEffect, useState } from 'react';
import { StyledCountryDetailsContainer } from './CountryDetailsView.styles';
import ChartsContainer from './ChartsContainer/ChartsContainer';
import capitalise from 'utils/capitalise.utils';
import { fetchData } from 'utils/fetchData.utils';

interface CountryDetailsViewProps {
  countryName: string | string[] | undefined;
}

export default function CountryDetailsView({ countryName }: CountryDetailsViewProps): ReactElement {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData(
      `https://disease.sh/v3/covid-19/historical/${countryName}?lastdays=360`,
      setChartData,
    );
  }, [countryName]);
  return (
    <StyledCountryDetailsContainer>
      <h2>{typeof countryName === 'string' && capitalise(countryName)}</h2>
      {chartData ? <ChartsContainer /> : 'Loading ...'}
    </StyledCountryDetailsContainer>
  );
}
