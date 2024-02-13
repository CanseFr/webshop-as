import { Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/authentication/authenticationSlice.ts';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

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
        <TextField
          color="secondary"
          id="outlined-password-input"
          label="Email"
          type="email"
          onChange={(e) => setMail(e.target.value)}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          color="secondary"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={8} margin="auto">
        <Typography onClick={() => navigate('/password')} sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
          Mot de passe oublié ?
        </Typography>
      </Grid>
      <Grid item margin="auto" xs={8}>
        <Button
          sx={{ fontWeight: 'bold', color: 'white' }}
          variant="contained"
          onClick={() => dispatch(login(mail, password))}
        >
          Valider
        </Button>
      </Grid>
    </Grid>
  );
};
