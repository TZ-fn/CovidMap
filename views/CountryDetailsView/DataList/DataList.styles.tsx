import styled from 'styled-components';
import mainTheme from 'theme/theme';

export const StyledDataList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.backgroundLighter};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${mainTheme.misc.borderRadius};
  box-shadow: ${mainTheme.misc.shadows.mediumElevation};
  margin: 0.5em 1em;
  min-width: 15em;
  width: 33%;
  min-height: min-content;
  height: 90%;
  margin-bottom: 1.5rem;
  padding: 1em 1em;
  font-size: 1.4em;

  h3,
  h4 {
    margin: 0.75rem 0;
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 2.2rem;
    border-bottom: 2px solid ${mainTheme.dataColors.Coral};
  }

  h4 {
    font-size: 1.5rem;
    border-bottom: 1px solid ${mainTheme.dataColors.Coral};
  }

  p {
    margin: 0.2rem 0;
  }

  @media (max-width: ${mainTheme.breakpoints.medium}) {
    margin-left: 0;
    margin-right: 0;
  }
`;
