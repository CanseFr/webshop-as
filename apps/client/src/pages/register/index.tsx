import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Register = () => {
  return (
    <Grid
      width="80vw"
      container
      spacing={2}
      display="flex"
      flexDirection="column"
      alignContent="center"
      margin="auto"
      justifyContent="center"
      bgcolor="#d5d3d3"
      padding={10}
      borderRadius={7}
      boxShadow={4}
      sx={{ marginTop: '20vh' }}
    >
      <Grid margin="auto" item xs={12}>
        <Typography variant="h3">Register</Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField color="secondary" id="outlined-password-input" label="Nom" type="text" />
      </Grid>
      <Grid item xs={8}>
        <TextField color="secondary" id="outlined-password-input" label="Prenom" type="text" />
      </Grid>
      <Grid item xs={8}>
        <TextField color="secondary" id="outlined-password-input" label="Email" type="email" />
      </Grid>
      <Grid item xs={8}>
        <TextField color="secondary" id="outlined-password-input" label="Password" type="password" />
      </Grid>
      <Grid item xs={8}>
        <TextField color="secondary" id="outlined-password-input" label="Confirm password" type="password" />
      </Grid>
      <Grid item margin="auto" xs={8}>
        <Button sx={{ fontWeight: 'bold', color: 'white' }} variant="contained">
          Valider
        </Button>
      </Grid>
    </Grid>
  );
};
