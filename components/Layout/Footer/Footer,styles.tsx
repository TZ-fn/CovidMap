import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 100%;
  background-color: ${mainTheme.themeColors.background};
`;
