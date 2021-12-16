import styled from 'styled-components';
import mainTheme from 'theme/theme';

export const StyledSearchBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 1em;

  form {
    display: flex;
    align-items: center;
  }

  span {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const StyledAutosuggestionList = styled.ul`
  position: absolute;
  top: 42px;
  z-index: 1000;
  min-width: 20rem;
  height: min-content;
  padding: 0.2rem 0.1rem;
  background: ${({ theme }) => theme.backgroundDarker};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${mainTheme.misc.borderRadius};
  box-shadow: ${mainTheme.misc.shadows.lowElevation};
  list-style: none;

  &:focus {
    outline: 1px solid ${mainTheme.dataColors.Coral};
  }

  @media (max-width: ${mainTheme.breakpoints.mainLogoSmaller}) {
    min-width: 16.5rem;
  }

  @media (max-width: ${mainTheme.breakpoints.smallest}) {
    top: 33px;
    min-width: 12rem;
  }
`;

export const StyledAutosuggestionItem = styled.li`
  border: ${({ isActive }) =>
    isActive ? `1px solid ${mainTheme.dataColors.Coral}` : '1px solid transparent'};
  font-size: 1.3rem;
  padding: 0.4rem 0.3rem;
  border-radius: ${mainTheme.misc.borderRadius};

  a {
    display: block;
  }

  &:hover {
    border: 1px solid ${mainTheme.dataColors.Coral};
  }

  @media (max-width: ${mainTheme.breakpoints.smallest}) {
    font-size: 1rem;
    padding: 0.2rem 0.15rem;
  }
`;
