import Aside from 'components/Elements/Aside/Aside';
import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledCountriesRanking = styled(Aside)`
  box-shadow: ${theme.misc.shadows.mediumElevation};

  h2 {
    border-bottom: 2px solid ${theme.dataColors.Coral};
  }
`;
