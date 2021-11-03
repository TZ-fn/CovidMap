import { ReactElement } from 'react';
import { StyledChartContainer } from './ChartContainer.styles';
import Chart from './Chart';

interface ChartProps {
  title: string;
}

export default function ChartContainer({ title }: ChartProps): ReactElement {
  return (
    <StyledChartContainer>
      <h3>{title}</h3>
      <Chart></Chart>
    </StyledChartContainer>
  );
}
