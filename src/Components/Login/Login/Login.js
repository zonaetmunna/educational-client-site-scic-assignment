import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
     const { loginUser, isLoading } = useAuth();
     // state
     const { loginData, setLoginData } = useState({});
     const navigate = useNavigate();
     const location = useLocation();

     // handle input change
     const handleChange = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newInputValue = { ...loginData };
          newInputValue[field] = value;
          console.log(newInputValue);
          setLoginData(newInputValue);
     }

     // handle submit
     const handleSubmit = (e) => {
          e.preventDefault();
          loginUser(loginData.email, loginData.password, navigate, location);
     }

     return (
          <Container>
               <Grid container spacing={2}>
                    <Typography variant='h4'>Login</Typography>
                    <Grid item xs={12} md={4}>
                         {!isLoading && < form onSubmit={handleSubmit} >
                              <TextField
                                   sx={{ m: 1 }}
                                   id="standard-basic"
                                   label="Your email"
                                   variant="standard"
                                   type="email"
                                   name="email"
                                   onChange={handleChange}
                              />
                              <br />
                              <TextField
                                   sx={{ m: 1 }}
                                   id="standard-basic"
                                   label="Your password"
                                   variant="standard"
                                   type="password"
                                   name="password"
                                   onChange={handleChange}
                              />
                              <br />

                              <Button sx={{ m: 1 }} variant="contained" type='submit'>Login</Button>


                         </form>}
                         {isLoading && <CircularProgress />
                         }
                         <Link to="/register">Are you new User,Please register</Link>
                    </Grid>
                    <Grid item xs={12} md={8}>

                    </Grid>
               </Grid>
          </Container >
     );
};

export default Login;