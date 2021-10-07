import styled from 'styled-components';
import { theme } from 'theme/theme';

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: min-content;
  width: 100%;
  min-height: 90vh;
  background: ${({ theme }) => theme.backgroundDarker};

  @media (max-width: ${theme.breakpoints.medium}) {
    flex-direction: column;

    aside {
      order: 1;
    }
  }
`;

export default StyledMain;
