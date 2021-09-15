import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledCountriesList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  height: 90%;
  padding: 1em;
  padding-left: 3em;
  background-color: ${mainTheme.darkTheme.backgroundLighter};
  border: 1px solid ${mainTheme.darkTheme.border};
  border-radius: ${mainTheme.misc.borderRadius};
`;
