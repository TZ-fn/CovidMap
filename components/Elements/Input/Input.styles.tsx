import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';
import deleteIcon from 'public/icons/icons8-delete.svg';

export const StyledInput = styled.input`
  font-size: 1.3rem;
  padding: 0.33em 0.25em;
  border-radius: ${mainTheme.misc.borderRadius};
  color: ${mainTheme.themeColors.fontColor};
  background-color: ${mainTheme.themeColors.backgroundDarker};

  &:focus {
    outline: 2px solid ${mainTheme.dataColors.Coral};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50em;
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
