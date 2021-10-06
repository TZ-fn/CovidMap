import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledMainMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 80vh;
  margin: auto 2em;
  padding: 1em;
  background: ${({ theme }) => theme.gradientBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.mediumElevation};

  @media (max-width: 95em) {
    margin-top: 2em;
    /* width: 90%; */
    /* max-width: 65em; */
    min-height: 80vh;
  }
`;
