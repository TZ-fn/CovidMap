import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledChartsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 90%;
  width: 100%;
  min-width: min-content;
  margin-bottom: 1.5rem;

  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
  }
`;
