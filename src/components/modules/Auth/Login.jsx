import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, Grid, Box } from '@mui/material';
import TextInput from '../../common/TextInput';
import { styled } from '@mui/system';
import theme from '../../../styles/theme';



const StyledPaper = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',

  [theme.breakpoints.down('sm')]: {
    height: '100vh',
    padding: theme.spacing(8)
  },
}));

const Login = ({ setLogin }) => {
  return (
    <>
      <CssBaseline />
      <Container component="main" style={{ padding: 0 }} maxWidth="sm">
        <StyledPaper
          elevation={3}
        >
          <Typography variant="h3600">Log In</Typography>
          <Typography variant="subtitle2" onClick={() => setLogin(false)} style={{ cursor: 'pointer' }}>
            New? Create an Account
          </Typography>
          <form style={{ width: '100%', marginTop: '20px' }} onSubmit={() => { window.location.href = '/details' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextInput label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextInput type="password" label="Password" />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"

              style={{ marginTop: '20px' }}
            >
              Sign In
            </Button>
            <Box pl={theme.spacing(1)} style={{ textAlign: 'left' }}>
              <FormControlLabel
                control={<input type='checkbox' />}
                label={<Typography variant='body2'>REMEMBER LOG IN</Typography>}
                style={{ marginTop: '10px' }}

              />
            </Box>
          </form>
        </StyledPaper>
      </Container>
    </>
  );
};

export default Login;
