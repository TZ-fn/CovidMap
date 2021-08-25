import { StyledListItem } from './ListItem.styles';

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function ListItem({ children, className }: ListItemProps) {
  return <StyledListItem className={className}>{children}</StyledListItem>;
}
