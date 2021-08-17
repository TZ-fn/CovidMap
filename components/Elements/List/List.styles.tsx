import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  height: 90%;
  padding: 1em;
  padding-left: 3em;
  background-color: ${mainTheme.themeColors.backgroundLighter};
  border: 1px solid ${mainTheme.themeColors.border};
  border-radius: ${mainTheme.misc.borderRadius};
`;
