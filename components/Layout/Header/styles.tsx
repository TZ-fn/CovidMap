import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;

  & > h1 {
    font-size: 3rem;
    margin-left: 1rem;
  }
`;
