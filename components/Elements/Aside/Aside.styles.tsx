import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 19%;
  height: 80vh;
  padding-top: 1em;
  background-color: ${mainTheme.darkTheme.background};
  border: 1px solid ${mainTheme.darkTheme.border};
  border-radius: ${mainTheme.misc.borderRadius};
`;
