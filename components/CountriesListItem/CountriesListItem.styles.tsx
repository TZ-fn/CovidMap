import ListItem from 'components/Elements/List/ListItem/ListItem';
import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledCountriesListItem = styled(ListItem)`
  font-size: 1.3rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${mainTheme.dataColors.Coral};
  }
`;
