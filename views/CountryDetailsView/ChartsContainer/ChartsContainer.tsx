import { ReactElement } from 'react';
import { StyledChartsContainer } from './ChartsContainer.styles';
import ChartContainer from '../Chart/ChartContainer';
import DataList from '../DataList/DataList';
import { HistoricalDataForCountry } from 'utils/APIdata.types';

interface ChartsContainerProps {
  chartData: HistoricalDataForCountry;
}

export default function ChartsContainer({ chartData }: ChartsContainerProps): ReactElement {
  return (
    <StyledChartsContainer>
      <ChartContainer
        title='Cases'
        fillColor='WebOrange'
        chartData={chartData.timeline.cases}
      ></ChartContainer>
      <DataList />
      <ChartContainer
        title='Deaths'
        fillColor='Cranberry'
        chartData={chartData.timeline.deaths}
      ></ChartContainer>
    </StyledChartsContainer>
  );
}
