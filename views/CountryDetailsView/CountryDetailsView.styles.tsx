import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledCountryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96.3%;
  height: 80vh;
  margin: 3em 2em;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${theme.misc.borderRadius};
  box-shadow: ${theme.misc.shadows.lowElevation};

  h2 {
    border-bottom: 2px solid ${theme.dataColors.Coral};
    font-size: 3rem;
    margin-top: 1.75rem;
    margin-bottom: 0;
  }
`;
