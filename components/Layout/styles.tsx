import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgb(0, 63, 92);
  background: linear-gradient(
    130deg,
    rgba(0, 63, 92, 0.15) 0%,
    rgba(188, 80, 144, 0.15) 50%,
    rgba(255, 166, 0, 0.15) 100%
  );
  & > * {
    border: 1px solid black;
  }
`;
