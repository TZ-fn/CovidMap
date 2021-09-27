import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 19%;
  height: 80vh;
  padding-top: 1em;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
`;
