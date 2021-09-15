import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${mainTheme.darkTheme.background};
  border-bottom: 1px solid ${mainTheme.darkTheme.border};
`;

export const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 1em;
`;
