import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';
import deleteIcon from 'public/icons/icons8-delete.svg';

export const StyledInput = styled.input`
  min-width: 20rem;
  padding: 0.8rem 1rem;
  border-radius: ${mainTheme.misc.borderRadius};
  color: ${mainTheme.themeColors.fontColor};
  font-size: 1.3rem;
  background-color: ${mainTheme.themeColors.backgroundDarker};
  box-shadow: none;
  border: none;

  &:focus {
    outline: 2px solid ${mainTheme.dataColors.Coral};
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
`;
