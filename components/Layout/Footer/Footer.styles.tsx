import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 25%;
  min-width: min-content;
  height: 7vh;
  width: 100%;
  background: ${({ theme }) => theme.gradientBackground};
  border-top: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${theme.misc.shadows.mediumElevation};

  a {
    margin-left: 1rem;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;
