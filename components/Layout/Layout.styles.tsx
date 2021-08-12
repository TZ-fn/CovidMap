import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${mainTheme.themeColors.backgroundDarker};
`;
