import {
  StyledToggleSwitchContainer,
  StyledToggleSwitchCheckbox,
  StyledToggleSwitchLabel,
  StyledToggleSwitchInnerSpan,
  StyledToggleSwitchInnerSwitch,
} from './ToggleSwitch.styles';

type ToggleSwitchProps = {
  name: string;
  ariaLabel: string;
  leftLabel: string;
  rightLabel: string;
};

export default function ToggleSwitch({
  name,
  ariaLabel,
  leftLabel,
  rightLabel,
}: ToggleSwitchProps) {
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
