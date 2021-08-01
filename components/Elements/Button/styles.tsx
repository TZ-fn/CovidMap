import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledButton = styled.button`
  box-size: border-box;
  padding: 1em 1.5em;
  color: ${mainTheme.themeColors.fontColor};
  border: 1px solid ${mainTheme.dataColors.Coral};
  background-color: ${mainTheme.themeColors.backgroundDarker};
  border-radius: 2px;

  &:hover {
    background-color: ${mainTheme.themeColors.background};
  }

  &:focus {
    outline: 2px solid ${mainTheme.dataColors.Coral};
  }
`;
