import Aside from 'components/Elements/Aside/Aside';
import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledCountriesRanking = styled(Aside)`
  & > h2 {
    border-bottom: 2px solid ${mainTheme.dataColors.Coral};
  }
`;
