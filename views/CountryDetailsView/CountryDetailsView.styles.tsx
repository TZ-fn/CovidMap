import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledCountryDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96.3%;
  height: 80vh;
  margin: 3em 2em;
  background-color: ${mainTheme.themeColors.background};
  border: 1px solid ${mainTheme.themeColors.border};
  border-radius: ${mainTheme.misc.borderRadius};
`;
