import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 7vh;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.border};

  a {
    margin-left: 1rem;
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }
`;
