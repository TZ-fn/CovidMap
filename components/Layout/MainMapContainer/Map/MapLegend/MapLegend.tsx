import { StyledMapLegendContainer } from './MapLegend.styles';
import DataColorItem from './DataColorItem/DataColorItem';
import casesToColorMap from 'assets/data/casesToColorMap';
import theme from 'theme/theme';

export default function Legend(): JSX.Element {
  return (
    <StyledMapLegendContainer>
      More than:
      {Object.values(theme.dataColors).map((color, i) => {
        return (
          <DataColorItem key={color} color={color}>
            {color === 'hsl(202, 9%, 61%)'
              ? 'No data available'
              : `${Intl.NumberFormat('PL').format(casesToColorMap[i])} cases`}
          </DataColorItem>
        );
      })}
    </StyledMapLegendContainer>
  );
}
