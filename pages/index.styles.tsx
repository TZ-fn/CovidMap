import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;

  @media (max-width: 75em) {
    flex-direction: column;
  }
`;

export default StyledMain;
