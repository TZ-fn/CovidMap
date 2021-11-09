import { ReactElement } from 'react';
import { StyledChartContainer } from './ChartContainer.styles';
import { DataColorsType } from 'theme/theme';

import Chart from './Chart';
import { TimelineData } from 'utils/APIdata.types';

interface ChartProps {
  title: string;
  fillColor: DataColorsType;
  chartData: TimelineData;
}

export default function ChartContainer({ title, fillColor, chartData }: ChartProps): ReactElement {
  return (
    <StyledChartContainer>
      <h3>{title}</h3>
      <Chart chartData={chartData} fillColor={fillColor}></Chart>
    </StyledChartContainer>
  );
}
