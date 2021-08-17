import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledList = styled.ul`
  width: 90%;
  height: 90%;
  padding: 0.5em;
  list-style: none;
  background-color: ${mainTheme.themeColors.backgroundLighter};
  border: 1px solid ${mainTheme.themeColors.border};
  border-radius: ${mainTheme.misc.borderRadius};
`;
