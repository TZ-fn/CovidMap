import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledChartsContainer = styled.div`
  background: ${({ theme }) => theme.gradientBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.highElevation};
  padding: 1em 2em;
  min-height: 83%;
  min-width: 95%;
  margin-bottom: 1.5rem;
`;
