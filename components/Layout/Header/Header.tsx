import { StyledHeader } from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Covid Map</h1>
      <div>
        <input type='search' placeholder='Search for country...' />
        <button type='button'>Search</button>
        <input type='checkbox' name='theme-picker' id='' />
      </div>
    </StyledHeader>
  );
}
