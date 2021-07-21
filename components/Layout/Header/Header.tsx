import { StyledHeader } from './styles';
import Button from 'components/Elements/Button/Button';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Covid Map</h1>
      <div>
        <input type='search' placeholder='Search for country...' />
        <Button>Search</Button>
        <input type='checkbox' name='theme-picker' id='' />
      </div>
    </StyledHeader>
  );
}
