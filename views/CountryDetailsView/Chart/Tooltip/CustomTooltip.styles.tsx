import styled from 'styled-components';
import theme from 'theme/theme';

export const CustomTooltipContainer = styled.div`
  padding: 0.3rem 1rem;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.backgroundLightest};
  border: 1px solid ${({ theme }) => theme.fontColor};
  border-radius: ${theme.misc.borderRadius};
`;
