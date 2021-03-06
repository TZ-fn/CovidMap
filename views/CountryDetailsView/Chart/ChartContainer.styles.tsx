import styled from 'styled-components';
import mainTheme from 'theme/theme';

export const StyledChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundLighter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${mainTheme.misc.borderRadius};
  box-shadow: ${mainTheme.misc.shadows.mediumElevation};
  margin: 0.5em 1em;
  min-width: 22em;
  width: 30%;
  max-width: 95%;
  height: 90%;
  margin-bottom: 1.5rem;
  padding: 0 0.7rem;

  h3 {
    border-bottom: 2px solid ${mainTheme.dataColors.Coral};
    font-size: 2rem;
  }

  @media (max-width: ${mainTheme.breakpoints.small}) {
    margin: 0.5em 0;
    width: 80vw;
  }
`;
