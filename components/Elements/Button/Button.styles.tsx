import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledButton = styled.button`
  padding: 1em 1.5em;
  color: ${mainTheme.themeColors.fontColor};
  border: 1px solid ${mainTheme.dataColors.Coral};
  background-color: ${mainTheme.themeColors.background};
  border-radius: ${mainTheme.misc.borderRadius};

  &:hover {
    background-color: ${mainTheme.themeColors.backgroundDarker};
  }

  &:focus {
    outline: 2px solid ${mainTheme.dataColors.Coral};
  }
`;
