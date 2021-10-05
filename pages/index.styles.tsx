import styled from 'styled-components';
import theme from 'theme/theme';

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 525px;
  width: 100%;
  min-height: 90vh;
  background: ${({ theme }) => theme.backgroundDarker};

  @media (max-width: 95em) {
    flex-direction: column;
  }
`;

export default StyledMain;
