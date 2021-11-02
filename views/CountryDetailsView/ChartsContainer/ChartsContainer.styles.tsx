import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledChartsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* background: ${({ theme }) => theme.gradientBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.mediumElevation}; */
  min-height: 90%;
  min-width: 95%;
  margin-bottom: 1.5rem;
`;
