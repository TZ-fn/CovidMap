import { ReactElement } from 'react';
import { StyledChartsContainer } from './ChartsContainer.styles';
import ChartContainer from '../Chart/ChartContainer';

export default function CountryDetailsView(): ReactElement {
  return (
    <StyledChartsContainer>
      <ChartContainer title='Cases' fillColor='WebOrange'></ChartContainer>
      <ChartContainer title='Recovered' fillColor='Coral'></ChartContainer>
      <ChartContainer title='Deaths' fillColor='Cranberry'></ChartContainer>
    </StyledChartsContainer>
  );
}
