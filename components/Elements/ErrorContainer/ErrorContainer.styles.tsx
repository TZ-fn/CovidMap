import styled from 'styled-components';
import mainTheme from 'theme/theme';

export const StyledErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 2em;
  padding: 1.5em 2em;
  margin: 3em 1em 1em 1em;
  background: ${({ theme }) => theme.backgroundLighter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${mainTheme.misc.borderRadius};
  box-shadow: ${mainTheme.misc.shadows.mediumElevation};
`;

export const StyledErrorImageContainer = styled.div`
  margin-right: 1em;
`;
