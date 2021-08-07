import { StyledThemeSwitch } from 'components/Elements/ThemeSwitch/ThemSwitch.styles';
import lightThemeIcon from 'public/icons/icons8-sun.svg';
import darkThemeIcon from 'public/icons/reshot-icon-moon-crescent-UKRLZEWPYG.svg';

export default function ThemeSwitch() {
  return (
    <StyledThemeSwitch
      name='theme-switch'
      ariaLabel='Theme toggle'
      leftLabel={lightThemeIcon.src}
      rightLabel={darkThemeIcon.src}
    />
  );
}
