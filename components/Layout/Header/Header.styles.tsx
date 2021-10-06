import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledHeader = styled.header`
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

  @media (max-width: 95em) {
    padding: 1em;
  }

  @media (max-width: 37em) {
    flex-direction: column;
  }
`;

export const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 1em;
`;
