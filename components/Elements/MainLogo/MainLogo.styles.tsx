import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledMainLogo = styled.h1`
  font-size: 3.5rem;
  margin: 0.25em 3em 0.25em 0.5em;
  text-shadow: ${theme.misc.shadows.default};

  @media (max-width: ${theme.breakpoints.medium}) {
    font-size: 2rem;
    margin-right: 0.5em;
  }

  @media (max-width: ${theme.breakpoints.mainLogoSmaller}) {
    margin: -0.4em 0.25em 0.1em 0.5em;
    font-size: 1.5rem;
  }
`;
