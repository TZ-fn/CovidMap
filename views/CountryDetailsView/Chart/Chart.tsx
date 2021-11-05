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

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

interface ChartProps {
  fillColor: DataColorsType;
}

export default function Chart({ fillColor }: ChartProps): ReactElement {
  const themeColors = useTheme();
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
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
        <XAxis dataKey='name' tick={{ fill: `${themeColors.fontColor}` }} />
        <YAxis tick={{ fill: `${themeColors.fontColor}` }} />
        <Tooltip
          contentStyle={{
            color: themeColors.fontColor,
            backgroundColor: themeColors.backgroundLightest,
            borderRadius: theme.misc.borderRadius,
            borderColor: themeColors.fontColor,
          }}
        />
        <Area
          type='monotone'
          dataKey='uv'
          stroke={themeColors.fontColor}
          fill={`url(#${fillColor})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
