import { StyledHeader } from './styles';
import { Input, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import SearchButton from 'components/Elements/SearchButton/SearchButton';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Covid Map</h1>
      <div>
        <Input type='search' placeholder='Search for country...' />
        <SearchButton />
        <FormGroup>
          <FormControlLabel control={<Switch />} label='Normal' />
        </FormGroup>
      </div>
    </StyledHeader>
  );
}
