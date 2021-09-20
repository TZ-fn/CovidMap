import { ReactElement } from 'react';
import { StyledThemeSwitch } from 'components/Elements/ThemeSwitch/ThemeSwitch.styles';
import lightThemeIcon from 'public/icons/icons8-sun.svg';
import darkThemeIcon from 'public/icons/reshot-icon-moon-crescent-UKRLZEWPYG.svg';

function switchTheme() {
  if (!window.localStorage.getItem('theme') || window.localStorage.getItem('theme') === 'dark') {
    window.localStorage.setItem('theme', 'light');
  } else {
    window.localStorage.setItem('theme', 'dark');
  }
}
export default function ThemeSwitch(): ReactElement {
  return (
    <StyledThemeSwitch
      name='theme-switch'
      ariaLabel='Theme toggle'
      leftLabel={lightThemeIcon.src}
      rightLabel={darkThemeIcon.src}
      onChange={switchTheme}
    />
  );
}
