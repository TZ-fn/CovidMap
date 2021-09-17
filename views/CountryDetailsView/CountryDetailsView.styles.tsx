import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledCountryDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96.3%;
  height: 80vh;
  margin: 3em 2em;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
`;
