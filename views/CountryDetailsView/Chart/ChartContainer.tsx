import { ReactElement } from 'react';
import { StyledChartContainer } from './ChartContainer.styles';
import Chart from './Chart';

interface ChartProps {
  title: string;
  fillColor: string;
}

export default function ChartContainer({ title, fillColor }: ChartProps): ReactElement {
  return (
    <StyledChartContainer>
      <h3>{title}</h3>
      <Chart fillColor={fillColor}></Chart>
    </StyledChartContainer>
  );
}
