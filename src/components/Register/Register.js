import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../Redux/user/UserSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

const Register = ()=> {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      setConfirmPasswordError("Password and confirm password don't match")
      return;
    }else{
      setConfirmPassword('')
    }

    const formData = {
      name,
      email,
      phoneNumber,
      password,
      confirmPassword,
    };
    
    try {
      if (password === confirmPassword) {
        const response = await dispatch(userRegister(formData));
        console.log("response",response)
        if(response.payload.status === 201){
          toast.success(response.payload.message)
          setTimeout(()=>{
            navigate('/login')
          },2000)
        }
      }
    } catch (error) {
       console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleRegister} noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="phoneNumber"
                    label="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    autoComplete="phoneNumber"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="ConfirmPassword"
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="confirmPassword"
                    error={!!confirmPasswordError}
                    helperText={confirmPasswordError}
                    />
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register;