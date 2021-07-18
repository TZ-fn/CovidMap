import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > * {
    border: 1px solid black;
  }
`;
