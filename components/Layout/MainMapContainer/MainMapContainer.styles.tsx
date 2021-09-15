import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledMainMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 80vh;
  margin: auto 2em;
  background-color: ${mainTheme.darkTheme.background};
  border: 1px solid ${mainTheme.darkTheme.border};
  border-radius: ${mainTheme.misc.borderRadius};
`;
