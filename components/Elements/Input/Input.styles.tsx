import styled from 'styled-components';
import theme from 'theme/theme';
import deleteIcon from 'public/icons/icons8-delete.svg';

export const StyledInput = styled.input`
  min-width: 20rem;
  padding: 0.75rem 0.95rem;
  margin-right: 1px;
  border-radius: ${theme.misc.borderRadius};
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.3rem;
  background: ${({ theme }) => theme.backgroundDarker};
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${theme.misc.shadows.lowElevation};

  &:focus {
    outline: 1px solid ${theme.dataColors.Coral};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    background: url(${deleteIcon.src}) no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
  }

  &:focus::-webkit-search-cancel-button {
    opacity: 1;
    pointer-events: all;
  }

  @media (max-width: ${theme.breakpoints.mainLogoSmaller}) {
    min-width: 10rem;
  }

  @media (max-width: ${theme.breakpoints.smallest}) {
    min-width: 8rem;
    font-size: 1rem;
    padding: 0.5rem 0.66rem;
  }
`;
