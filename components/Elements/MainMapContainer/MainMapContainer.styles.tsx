import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledMainMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 80vh;
  background-color: ${mainTheme.themeColors.background};
`;
