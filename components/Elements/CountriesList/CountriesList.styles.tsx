import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledCountriesList = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  height: min-content;
  padding: 1em;
  padding-left: 3em;
  background: ${({ theme }) => theme.backgroundLighter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.mediumElevation};
`;
