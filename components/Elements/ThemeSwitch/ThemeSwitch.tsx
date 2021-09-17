import { ReactElement } from 'react';
import { StyledThemeSwitch } from 'components/Elements/ThemeSwitch/ThemeSwitch.styles';
import lightThemeIcon from 'public/icons/icons8-sun.svg';
import darkThemeIcon from 'public/icons/reshot-icon-moon-crescent-UKRLZEWPYG.svg';

function switchTheme() {
  if (
    !window.localStorage.getItem('darkThemeOn') ||
    window.localStorage.getItem('darkThemeOn') === 'false'
  ) {
    window.localStorage.setItem('darkThemeOn', 'true');
    console.log(window.localStorage.getItem('darkThemeOn'));
  } else {
    window.localStorage.setItem('darkThemeOn', 'false');
    console.log(window.localStorage.getItem('darkThemeOn'));
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
