import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Grid
      width="90vw"
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
        <Typography variant="h3">Mot de passe oublié</Typography>
      </Grid>
      <Grid margin="auto" item xs={8}>
        <TextField color="secondary" id="outlined-password-input" label="Email" type="email" />
      </Grid>
      <Grid item margin="auto" xs={8}>
        <Button sx={{ fontWeight: 'bold', color: 'white' }} variant="contained">
          Valider
        </Button>
      </Grid>
      <Grid
        item
        xs={8}
        margin="auto"
        mt={2}
        display="flex"
        flexDirection="row"
        onClick={() => navigate('/login')}
        sx={{ cursor: 'pointer' }}
      >
        <ArrowBackIcon />
        <Typography fontWeight="bold">Retourner au Login</Typography>
      </Grid>
    </Grid>
  );
};
