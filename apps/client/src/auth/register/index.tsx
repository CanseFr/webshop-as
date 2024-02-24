import { AlertColor, Checkbox, FormControlLabel, Grid, styled, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CGU } from '../general-conditions';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Alert from '@mui/material/Alert';
import { CreateUserDto } from 'api/dist/src/users/dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [severityAlert, setSeverityAlert] = useState<AlertColor>();

  const [firstname, setFirstname] = useState<string>('');
  const [firstnameError, setFirstnameError] = useState<boolean>(false);

  const [lastname, setLastname] = useState<string>('');
  const [lastnameError, setLastnameError] = useState<boolean>(false);

  const [birthday, setBirthday] = React.useState<Dayjs | null>(dayjs('2006-01-31'));
  const [birthDateError, setBirthDateError] = useState<boolean>(false);
  const minDate = dayjs().subtract(100, 'year');
  const maxDate = dayjs().subtract(18, 'year');

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

  const [avatarPath, setAvatarPath] = useState<string>(uuidv4().toString());
  const [avatarPathError, setAvatarPathError] = useState<boolean>(false);

  const [cgu, setCgu] = useState<boolean>(false);
  const [cguError, setCguError] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>('');

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleRegister = () => {
    if (firstname.length < 3 || firstname.length > 15) {
      setFirstnameError(true);
      setSeverityAlert('warning');
      setErrorMsg('Le nom doit contenir entre 2 et 15 caracteres.');
      return;
    } else {
      setFirstnameError(false);
      setErrorMsg('');
    }

    if (lastname.length < 3 || lastname.length > 15) {
      setSeverityAlert('warning');
      setLastnameError(true);
      setErrorMsg('Le prenom doit contenir entre 2 et 15 caracteres.');
      return;
    } else {
      setLastnameError(false);
      setErrorMsg('');
    }

    if (birthday!.toDate() < minDate.toDate() || birthday!.toDate() > maxDate.toDate()) {
      setSeverityAlert('warning');
      setBirthDateError(true);
      setErrorMsg('Vous devez specifier un age legal');
      return;
    } else {
      setBirthDateError(false);
      setErrorMsg('');
    }

    if (!regex.test(email)) {
      setSeverityAlert('warning');
      setEmailError(true);
      setErrorMsg("L'email specifié est invalide");
      return;
    } else {
      setEmailError(false);
      setErrorMsg('');
    }

    if (password.length < 8 || lastname.length > 20) {
      setSeverityAlert('warning');
      setPasswordError(true);
      setErrorMsg('Le mot de passe doit contenir entre 8 et 20 caracteres');
      return;
    } else {
      setPasswordError(false);
      setErrorMsg('');
    }

    if (password !== confirmPassword) {
      setSeverityAlert('warning');
      setConfirmPasswordError(true);
      setErrorMsg('Les mots de passes ne sont pas identiques');
      return;
    } else {
      setConfirmPasswordError(false);
      setErrorMsg('');
    }

    if (!cgu) {
      setSeverityAlert('warning');
      setCguError(true);
      setErrorMsg('Vous devez acceptez les conditions générales de vente');
      return;
    } else {
      setCguError(false);
      setErrorMsg('');
    }

    const registerUser: CreateUserDto = {
      lastname: lastname,
      firstname: firstname,
      birthday: birthday!.toISOString(),
      email: email,
      password: password,
      avatarPath: avatarPath,
      role: 'USER',
    };

    fetch('http://localhost:3000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerUser),
    })
      .then((res: Response) => {
        if (res.status === 201) {
          setErrorMsg('Inscription validé');
          setSeverityAlert('success');
          navigate('/login');
        } else {
          setSeverityAlert('error');
          setErrorMsg('Un probleme est apparut avec votre requete');
        }
      })
      .catch(() => {
        setSeverityAlert('error');
        setErrorMsg('Un probleme est apparut avec votre requete');
      });
  };

  const handleFileChange = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    if (file) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension === 'jpg' || extension === 'jpeg') {
        const formData = new FormData();
        formData.append('avatar', file);
        console.log('image valide');
        setErrorMsg('');
        setAvatarPathError(false);
        const fileName = file.name.split('.');
        fileName[0] = uuidv4().toString();
        setAvatarPath(fileName[0]);

        // const uploadsDir = join(__dirname);
        // const filePath = join(uploadsDir, fileName[0]);
        //
        // // Sauvegarde du fichier
        // fs.promises.writeFile(filePath, file.buffer);
      } else {
        setErrorMsg('Le fichier doit respecter le format jpeg ou jpg');
        setAvatarPathError(true);
      }
    }
  };

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
        padding={5}
        borderRadius={2}
        boxShadow={4}
        sx={{ marginTop: '3vh' }}
      >
        {errorMsg !== '' && <Alert severity={severityAlert}>{errorMsg}</Alert>}
        <Grid margin="auto" item xs={12}>
          <Typography variant="h3">Register</Typography>
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField
            color="secondary"
            id="outlined-password-input"
            label="Nom"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            error={firstnameError}
          />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField
            color="secondary"
            id="outlined-password-input"
            label="Prenom"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            error={lastnameError}
          />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField', 'DateField']}>
              <DateField
                minDate={minDate}
                maxDate={maxDate}
                color="secondary"
                label={'Date de naissance'}
                value={birthday}
                onChange={(newValue) => setBirthday(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>{' '}
        </Grid>

        <Grid margin="auto" item xs={8}>
          <TextField
            color="secondary"
            id="outlined-password-input"
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField
            color="secondary"
            id="outlined-password-input"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <TextField
            color="secondary"
            id="outlined-password-input"
            label="Confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
          />
        </Grid>
        <Grid margin="auto" item xs={8}>
          <Button component="label" variant="contained" startIcon={<AccountCircleIcon />}>
            Avatar
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>
        </Grid>
        <Grid item xs={8} margin="auto">
          <FormControlLabel
            control={<Checkbox value={cgu} onChange={() => setCgu(!cgu)} />}
            label="Accepter les conditions générales de vente"
          />
        </Grid>
        <Grid item xs={8} margin="auto">
          <CGU />
        </Grid>
        <Grid item margin="auto" xs={8}>
          <Button sx={{ fontWeight: 'bold', color: 'white' }} variant="contained" onClick={() => handleRegister()}>
            Valider
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
