import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledButton = styled.button`
  padding: 1em 1.5em;
  color: ${mainTheme.themeColors.fontColor};
  border: 1px solid ${mainTheme.dataColors.Coral};
  background-color: ${mainTheme.themeColors.backgroundDarker};
  border-radius: 2px;

  &:hover {
    background-color: blue;
  }
`;
