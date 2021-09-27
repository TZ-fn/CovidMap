import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.gradientBackground};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 1em;
`;
