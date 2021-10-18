import { StyledMapLegendContainer } from './MapLegend.styles';
import DataColorItem from './DataColorItem/DataColorItem';
import theme from 'theme/theme';

export default function Legend(): JSX.Element {
  return (
    <StyledMapLegendContainer>
      {Object.values(theme.dataColors).map((color) => {
        return <DataColorItem key={color} color={color}></DataColorItem>;
      })}
    </StyledMapLegendContainer>
  );
}
