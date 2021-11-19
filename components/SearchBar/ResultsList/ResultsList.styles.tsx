import styled from 'styled-components';
import mainTheme from 'theme/theme';

export const StyledResultsList = styled.ul`
  position: absolute;
  top: 42px;
  z-index: 1000;
  min-width: 20rem;
  height: min-content;
  padding: 0.2rem 0.5rem;
  background: ${({ theme }) => theme.backgroundDarker};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${mainTheme.misc.borderRadius};
  box-shadow: ${mainTheme.misc.shadows.lowElevation};
  list-style: none;

  &:focus {
    outline: 1px solid ${mainTheme.dataColors.Coral};
  }

  li {
    border: 1px solid transparent;
    font-size: 1.3rem;

    a {
      display: block;
      padding: 0.4rem 0.3rem;
    }

    &:hover {
      border: 1px solid ${mainTheme.dataColors.Coral};
      border-radius: ${mainTheme.misc.borderRadius};
    }
  }

  @media (max-width: ${mainTheme.breakpoints.mainLogoSmaller}) {
    min-width: 16.5rem;
  }

  @media (max-width: ${mainTheme.breakpoints.smallest}) {
    top: 33px;
    min-width: 12rem;

    li {
      font-size: 1rem;
      padding: 0.2rem 0.15rem;
    }
  }
`;
