import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 100%;
  background-color: ${mainTheme.themeColors.background};
  border-top: 1px solid ${mainTheme.themeColors.border};

  & > a {
    margin-left: 1rem;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;
