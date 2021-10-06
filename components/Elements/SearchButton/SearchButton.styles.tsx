import styled from 'styled-components';
import Button from '../Button/Button';

export const StyledSearchButton = styled(Button)`
  width: 57px;
  height: 57px;
  padding: 0.5em 0.6em 0em 0.6em;

  & svg {
    fill: ${({ theme }) => theme.fontColor};
  }

  @media (max-width: 37em) {
    margin-left: -0.55rem;
    transform: scale(0.72);
  }
`;
