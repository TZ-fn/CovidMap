import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledCountriesListItem = styled.li`
  margin: 0.7rem;
  font-size: 1.2rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${mainTheme.dataColors.Coral};
  }
`;
