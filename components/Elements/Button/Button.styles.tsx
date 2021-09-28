import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledButton = styled.button`
  padding: 1em 1.5em;
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid ${theme.dataColors.Coral};
  background: ${({ theme }) => theme.backgroundLighter};
  border-radius: ${theme.misc.borderRadius};

  &:hover {
    background: ${({ theme }) => theme.background};
  }

  &:focus {
    outline: 1px solid ${theme.dataColors.Coral};
  }
`;
