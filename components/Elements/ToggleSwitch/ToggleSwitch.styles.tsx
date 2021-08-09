import styled from 'styled-components';
import mainTheme from 'theme/mainTheme';

export const StyledToggleSwitchContainer = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: left;
  margin-left: 1em;
`;

export const StyledToggleSwitchLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
  margin: 0;
`;

export const StyledToggleSwitchInnerSpan = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;

  &:before,
  &:after {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 14px;
    color: ${mainTheme.themeColors.fontColor};
    font-weight: bold;
    box-sizing: border-box;
  }

  &:before {
    content: url(${({ leftLabel }) => leftLabel});
    text-transform: uppercase;
    margin-top: 0;
    padding-left: 0;
    background-color: ${mainTheme.dataColors.AstronautBlue};
    color: ${mainTheme.themeColors.fontColor};
  }

  &:after {
    content: url(${({ rightLabel }) => rightLabel});
    text-transform: uppercase;
    padding-top: 4px;
    padding-right: 4px;
    background-color: ${mainTheme.dataColors.Coral};
    color: ${mainTheme.themeColors.fontColor};
    text-align: right;
  }
`;

export const StyledToggleSwitchInnerSwitch = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: ${mainTheme.themeColors.fontColor};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
`;

export const StyledToggleSwitchCheckbox = styled.input`
  display: none;

  &:checked + ${StyledToggleSwitchLabel} {
    ${StyledToggleSwitchInnerSpan} {
      margin-left: 0;
    }
    ${StyledToggleSwitchInnerSwitch} {
      right: 0px;
    }
  }
`;
