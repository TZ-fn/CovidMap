import { ReactElement } from 'react';
import { StyledChartsContainer } from './ChartsContainer.styles';
import ChartContainer from '../Chart/ChartContainer';
import DataList from '../DataList/DataList';

export default function CountryDetailsView(): ReactElement {
  return (
    <StyledChartsContainer>
      <ChartContainer title='Cases' fillColor='WebOrange'></ChartContainer>
      <DataList />
      <ChartContainer title='Deaths' fillColor='Cranberry'></ChartContainer>
    </StyledChartsContainer>
  );
}
