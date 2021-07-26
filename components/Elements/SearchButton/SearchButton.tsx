import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchButton() {
  return (
    <Button variant='contained' aria-label='Search' type='button'>
      <SearchIcon />
    </Button>
  );
}
