import * as React from 'react';
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
}

export default function ToggleSwitch({
  name,
  ariaLabel,
  leftLabel,
  rightLabel,
}: ToggleSwitchProps): React.ReactElement {
  return (
    <StyledToggleSwitchContainer>
      <StyledToggleSwitchCheckbox type='checkbox' name={name} id={name} aria-label={ariaLabel} />
      <StyledToggleSwitchLabel htmlFor={name}>
        <StyledToggleSwitchInnerSpan leftLabel={leftLabel} rightLabel={rightLabel} />
        <StyledToggleSwitchInnerSwitch />
      </StyledToggleSwitchLabel>
    </StyledToggleSwitchContainer>
  );
}
