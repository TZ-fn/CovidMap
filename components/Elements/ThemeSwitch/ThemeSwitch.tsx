import { Switch, Grid } from '@material-ui/core';
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

export default function ThemeSwitch() {
  return (
    <Grid component='label' container alignItems='center'>
      <Grid item>
        <Brightness1OutlinedIcon />
      </Grid>
      <Grid item>
        <Switch />
      </Grid>
      <Grid item>
        <Brightness2OutlinedIcon />
      </Grid>
    </Grid>
  );
}
