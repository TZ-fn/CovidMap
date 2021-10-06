import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
  height: min-content;
  margin-top: 1em;
  margin-bottom: 1em;
  padding-top: 1em;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};

  @media (max-width: 95em) {
    width: max-content;
  }
`;
