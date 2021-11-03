import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundLighter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.highElevation};
  margin: 0.5em 1em;
  width: 33%;
  height: 90%;
  margin-bottom: 1.5rem;

  h3 {
    border-bottom: 2px solid ${theme.dataColors.Coral};
    font-size: 2rem;
  }
`;
