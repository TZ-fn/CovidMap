import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 19%;
  height: 80vh;
  background-color: ${mainTheme.themeColors.background};
  border: 1px solid ${mainTheme.themeColors.border};
  border-radius: ${mainTheme.misc.borderRadius};
`;
