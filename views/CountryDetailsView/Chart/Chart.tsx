import { ReactElement } from 'react';
import { useTheme } from 'styled-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import theme, { DataColorsType } from 'theme/theme';
import { formatChartDataFromAPI } from 'utils/Chart.utils';
import formatNumberToPolishLocale from 'utils/formatNumberToPolishLocale';
import { TimelineData } from 'utils/APIdata.types';

interface ChartProps {
  fillColor: DataColorsType;
  chartData: TimelineData;
}

export default function Chart({ fillColor, chartData }: ChartProps): ReactElement {
  const themeColors = useTheme();

  function tooltipContent({ active, payload, label }) {
    if (active && payload && payload.length) {
      return <p className='label'>{`${label} : ${payload[0].value}`}</p>;
    }
    return null;
  }

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        width={500}
        height={400}
        data={formatChartDataFromAPI(chartData)}
        margin={{
          top: 10,
          right: 30,
          left: 30,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id={fillColor} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='60%' stopColor={theme.dataColors[fillColor]} stopOpacity={1} />
            <stop offset='100%' stopColor={theme.dataColors[fillColor]} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' tick={{ fill: `${themeColors.fontColor}` }} />
        <YAxis
          tick={{ fill: `${themeColors.fontColor}` }}
          tickFormatter={(tick) => formatNumberToPolishLocale(tick)}
        />
        <Tooltip
          content={tooltipContent}
          contentStyle={{
            color: themeColors.fontColor,
            backgroundColor: themeColors.backgroundLightest,
            borderRadius: theme.misc.borderRadius,
            borderColor: themeColors.fontColor,
          }}
        />
        <Area
          type='monotone'
          dataKey='numberOfPeople'
          stroke={themeColors.fontColor}
          fill={`url(#${fillColor})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
