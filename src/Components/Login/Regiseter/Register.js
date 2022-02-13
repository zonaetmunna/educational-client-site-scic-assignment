import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
     const { registerUser } = useAuth();
     // state
     const { loginData, setLoginData } = useState({});


     // handle input change
     const handleChange = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newInputValue = { ...loginData };
          newInputValue[field] = value;
          setLoginData(newInputValue);
     }

     // handle submit
     const handleSubmit = (e) => {
          e.preventDefault();
          if (loginData.password !== loginData.password2) {
               alert('please right password')
          }
          registerUser(loginData.name, loginData.email, loginData.password)
     }
     return (
          <Container>
               <Grid container spacing={2}>
                    <Typography variant='h4'>Login</Typography>
                    <Grid item xs={12} md={4}>
                         <form onSubmit={handleSubmit} >
                              <TextField
                                   sx={{ m: 1 }}
                                   id="standard-basic"
                                   label="Your name"
                                   variant="standard"
                                   type="text"
                                   name="name"
                                   onChange={handleChange}
                              />
                              <br />
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
                              <TextField
                                   sx={{ m: 1 }}
                                   id="standard-basic"
                                   label="Re-Type Your password"
                                   variant="standard"
                                   type="password"
                                   name="password2"
                                   onChange={handleChange}
                              />
                              <br />

                              <Button sx={{ m: 1 }} variant="contained" type='submit'>Login</Button>


                         </form>
                         <Link to="/login">Already have account ,please login</Link>
                    </Grid>
                    <Grid item xs={12} md={8}>

                    </Grid>
               </Grid>
          </Container>
     );
};

export default Register;