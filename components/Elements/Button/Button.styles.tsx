import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledButton = styled.button`
  padding: 1em 1.5em;
  color: ${mainTheme.darkTheme.fontColor};
  border: 1px solid ${mainTheme.darkTheme.border};
  background-color: ${mainTheme.darkTheme.background};
  border-radius: ${mainTheme.misc.borderRadius};

  &:hover {
    background-color: ${mainTheme.dataColors.Coral};
  }

  &:focus {
    outline: 2px solid ${mainTheme.dataColors.Coral};
  }
`;
