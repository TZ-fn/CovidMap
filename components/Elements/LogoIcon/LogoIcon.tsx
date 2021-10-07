import { ReactElement } from 'react';
import { StyledLogoIcon } from './LogoIcon.styles';
import LogoIconFile from '../../../public/Covid19_Map_Logo.svg';

export default function LogoIcon(): ReactElement {
  return <StyledLogoIcon alt='Covid-19 Map Logo' src={LogoIconFile.src} />;
}
