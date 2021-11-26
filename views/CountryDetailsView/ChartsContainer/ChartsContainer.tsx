import { ReactElement } from 'react';
import { StyledChartsContainer } from './ChartsContainer.styles';
import ChartContainer from '../Chart/ChartContainer';
import DataList from '../DataList/DataList';
import { CovidCasesDataForCountry, HistoricalDataForCountry } from 'utils/APIdata.types';
import { useFetch } from 'hooks/useFetch';

interface ChartsContainerProps {
  chartData: HistoricalDataForCountry;
  countryName: string | string[] | undefined;
}

export default function ChartsContainer({
  chartData,
  countryName,
}: ChartsContainerProps): ReactElement {
  const [countryData] = useFetch(
    `https://disease.sh/v3/covid-19/countries/${countryName}?strict=true`,
  );

  return (
    <StyledChartsContainer>
      <ChartContainer
        title='Cases'
        fillColor='WebOrange'
        chartData={chartData.timeline.cases}
      ></ChartContainer>
      <DataList countryData={countryData as CovidCasesDataForCountry} />
      <ChartContainer
        title='Deaths'
        fillColor='Cranberry'
        chartData={chartData.timeline.deaths}
      ></ChartContainer>
    </StyledChartsContainer>
  );
}
