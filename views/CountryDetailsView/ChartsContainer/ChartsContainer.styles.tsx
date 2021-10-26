import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledChartsContainer = styled.div`
  background: ${({ theme }) => theme.gradientBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.highElevation};
`;
