import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CGU } from '../general-conditions';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const Register = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <>
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
        sx={{ marginTop: '10vh' }}
      >
        <Grid margin="auto" item xs={12}>
          <Typography variant="h3">Register</Typography>
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField color="secondary" id="outlined-password-input" label="Nom" type="text" />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField color="secondary" id="outlined-password-input" label="Prenom" type="text" />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField', 'DateField']}>
              <DateField
                color="secondary"
                label="Controlled field"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>{' '}
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField color="secondary" id="outlined-password-input" label="Email" type="email" />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField color="secondary" id="outlined-password-input" label="Password" type="password" />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField color="secondary" id="outlined-password-input" label="Confirm password" type="password" />
        </Grid>
        <Grid item xs={8} margin="auto">
          <FormControlLabel control={<Checkbox />} label="Accepter les conditions générales de vente" />
        </Grid>
        <Grid item xs={8} margin="auto">
          <CGU />
        </Grid>
        <Grid item margin="auto" xs={8}>
          <Button sx={{ fontWeight: 'bold', color: 'white' }} variant="contained">
            Valider
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
