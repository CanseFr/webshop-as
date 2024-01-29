import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Login = () => {
  return (
    <Grid
      width="40vw"
      container
      spacing={2}
      display="flex"
      flexDirection="column"
      alignContent="center"
      margin="auto"
      justifyContent="center"
      bgcolor="#f2f2f2"
      padding={10}
      borderRadius={2}
      boxShadow={4}
      sx={{ marginTop: '20vh' }}
    >
      <Grid margin="auto" item xs={12}>
        <Typography variant="h3">Login</Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField color="secondary" id="outlined-password-input" label="Email" type="email" />
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color="secondary"
        />
      </Grid>
      <Grid item xs={8}>
        <Typography>Mot de passe oublié ?</Typography>
      </Grid>
      <Grid item margin="auto" xs={8}>
        <Button sx={{ fontWeight: 'bold', color: 'white' }} variant="contained">
          Valider
        </Button>
      </Grid>
    </Grid>
  );
};
