import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledMainLogo = styled.h1`
  font-size: 3.5rem;
  margin: 0.25em 3em 0.25em 0.25em;
  filter: drop-shadow(${theme.misc.shadows.mediumElevation});

  @media (max-width: 95em) {
    font-size: 2rem;
    margin-right: 0.5em;
  }

  @media (max-width: 54em) {
    font-size: 1.5rem;
    margin-right: 0.25em;
  }
`;
