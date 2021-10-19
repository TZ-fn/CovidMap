import styled from 'styled-components';

export const StyledDataColorItem = styled.div`
  width: 1.5em;
  height: 1.5em;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ theme }) => theme.fontColor};
`;

export const StyledDataColorItemContainer = styled.div`
  margin: 0.3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
