import { ReactElement, ChangeEventHandler } from 'react';
import { StyledThemeSwitch } from 'components/Elements/ThemeSwitch/ThemeSwitch.styles';
import lightThemeIcon from 'public/icons/icons8-sun.svg';
import darkThemeIcon from 'public/icons/reshot-icon-moon-crescent-UKRLZEWPYG.svg';

interface ThemeSwitchProps {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function ThemeSwitch({ onChange }: ThemeSwitchProps): ReactElement {
  return (
    <StyledThemeSwitch
      name='theme-switch'
      ariaLabel='Theme toggle'
      leftLabel={lightThemeIcon.src}
      rightLabel={darkThemeIcon.src}
      onChange={onChange}
    />
  );
}
