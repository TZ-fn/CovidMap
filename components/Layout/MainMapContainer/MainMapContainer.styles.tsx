import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledMainMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 80vh;
  margin: auto 2em;
  background: ${({ theme }) => theme.gradientBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
`;
