import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledMapLegendContainer = styled.div`
  position: absolute;
  z-index: 999;
  left: 1em;
  bottom: 1em;
  width: 15em;
  height: 20em;
  padding: 1em;
  background: ${({ theme }) => theme.backgroundLighter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.lowElevation};
`;
