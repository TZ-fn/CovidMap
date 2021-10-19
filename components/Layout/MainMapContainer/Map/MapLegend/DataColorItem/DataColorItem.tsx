import { StyledDataColorItem, StyledDataColorItemContainer } from './DataColorItem.styles';

interface ColorItemProps {
  color: string;
  children: string;
}

export default function DataColor({ color, children }: ColorItemProps): JSX.Element {
  return (
    <StyledDataColorItemContainer>
      <StyledDataColorItem color={color} />
      {children}
    </StyledDataColorItemContainer>
  );
}
