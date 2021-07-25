import { StyledButton } from './styles';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchButton() {
  return (
    <StyledButton aria-label='Search' type='button'>
      <SearchIcon />
    </StyledButton>
  );
}
