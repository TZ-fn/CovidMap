import { ChangeEventHandler, ReactElement } from 'react';
import {
  StyledToggleSwitchContainer,
  StyledToggleSwitchCheckbox,
  StyledToggleSwitchLabel,
  StyledToggleSwitchInnerSpan,
  StyledToggleSwitchInnerSwitch,
} from './ToggleSwitch.styles';

interface ToggleSwitchProps {
  name: string;
  ariaLabel: string;
  leftLabel: string;
  rightLabel: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function ToggleSwitch({
  name,
  ariaLabel,
  leftLabel,
  rightLabel,
  onChange,
}: ToggleSwitchProps): ReactElement {
  return (
    <StyledToggleSwitchContainer>
      <StyledToggleSwitchCheckbox
        type='checkbox'
        name={name}
        id={name}
        aria-label={ariaLabel}
        onChange={onChange}
      />
      <StyledToggleSwitchLabel htmlFor={name}>
        <StyledToggleSwitchInnerSpan leftLabel={leftLabel} rightLabel={rightLabel} />
        <StyledToggleSwitchInnerSwitch />
      </StyledToggleSwitchLabel>
    </StyledToggleSwitchContainer>
  );
}
