import { ReactElement } from 'react';
import formatNumberToPolishLocale from 'utils/formatNumberToPolishLocale';
import { CustomTooltipContainer } from './CustomTooltip.styles';

interface CustomTooltipProps {
  active?: boolean;
  payload?: [
    {
      chartType: undefined;
      color: string;
      dataKey: string;
      fill: string;
      fillOpacity: number;
      formatter: undefined;
      name: string;
      payload: { numberOfPeople: number; date: string };
      points: [];
      stroke: string;
      type: undefined;
      unit: undefined;
      value: number;
    },
  ];
  label?: string;
}

export default function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps): ReactElement | null {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipContainer>
        <p>Date: {label}</p>
        <p>Number of people: {formatNumberToPolishLocale(payload[0]?.value)}</p>
      </CustomTooltipContainer>
    );
  }
  return null;
}
