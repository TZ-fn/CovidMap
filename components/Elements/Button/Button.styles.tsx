import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledButton = styled.button`
  padding: 1em 1.5em;
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
  border-radius: ${theme.misc.borderRadius};

  &:hover {
    background-color: ${theme.dataColors.Coral};
  }

  &:focus {
    outline: 1px solid ${theme.dataColors.Coral};
  }
`;
