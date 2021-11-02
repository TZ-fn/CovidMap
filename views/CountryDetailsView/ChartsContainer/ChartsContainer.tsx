import { ReactElement } from 'react';
import { StyledChartsContainer } from './ChartsContainer.styles';
import Chart from '../Chart/Chart';

export default function CountryDetailsView(): ReactElement {
  return (
    <StyledChartsContainer>
      <Chart></Chart>
      <Chart></Chart>
      <Chart></Chart>
    </StyledChartsContainer>
  );
}
