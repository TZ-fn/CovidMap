import React, { ReactElement } from 'react';
import { StyledFooter } from './Footer.styles';

export default function Footer(): ReactElement {
  return (
    <StyledFooter>
      Data source:
      <a rel='noopener noreferrer' href='https://www.worldometers.info/coronavirus/'>
        worldometers.info
      </a>
    </StyledFooter>
  );
}
