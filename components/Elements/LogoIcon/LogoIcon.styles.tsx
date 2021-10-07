import styled from 'styled-components';
import theme from 'theme/theme';

export const StyledLogoIcon = styled.img`
  width: 85px;
  height: 85px;
  filter: drop-shadow(${theme.misc.shadows.default});

  @media (max-width: ${theme.breakpoints.smallest}) {
    width: 30px;
    height: 30px;
  }
`;
