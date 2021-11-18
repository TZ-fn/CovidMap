import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledHeader = styled.header`
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 25%;
  min-width: min-content;
  width: 100%;
  background: ${({ theme }) => theme.gradientBackground};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${theme.misc.shadows.mediumElevation};

  @media (max-width: ${theme.breakpoints.medium}) {
    padding: 1em;
  }

  @media (max-width: ${theme.breakpoints.smallest}) {
    flex-direction: column;
  }
`;
