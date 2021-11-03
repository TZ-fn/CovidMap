import { ReactElement } from 'react';
import { StyledChartsContainer } from './ChartsContainer.styles';
import ChartContainer from '../Chart/ChartContainer';

export default function CountryDetailsView(): ReactElement {
  return (
    <StyledChartsContainer>
      <ChartContainer title='Cases'></ChartContainer>
      <ChartContainer title='Recovered'></ChartContainer>
      <ChartContainer title='Deaths'></ChartContainer>
    </StyledChartsContainer>
  );
}
