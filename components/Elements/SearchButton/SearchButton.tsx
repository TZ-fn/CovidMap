import { StyledSearchButton } from './styles';
import SearchIcon from 'public/icons/iconmonstr-search-thin.svg';

export default function SearchButton() {
  return (
    <StyledSearchButton aria-label='Search'>
      <img src={SearchIcon.src} alt='' />
    </StyledSearchButton>
  );
}
