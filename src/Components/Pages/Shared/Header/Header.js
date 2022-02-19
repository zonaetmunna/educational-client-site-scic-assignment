import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from 'styled-components';
import { makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     /* const theme = useTheme();
     const useStyle = makeStyles({
          navItem: {
               textDecoration: 'none',
               color: 'black'
          },

          navIcon: {
               [theme.breakpoints.up('sm')]: {
                    display: 'none',

               }
          },
          navItemContain: {
               [theme.breakpoints.down('sm')]: {
                    display: 'none',

               }
          },
          navLogo: {
               [theme.breakpoints.down('sm')]: {
                    textAlign: 'right'
               }
          }
     }); */

     return (
          <Box sx={{ flexGrow: 1 }}>
               <AppBar position="static">
                    <Toolbar>
                         <IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 2 }}
                         >
                              <MenuIcon />
                         </IconButton>
                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              News
                         </Typography>
                         {user?.email ?
                              <Button onClick={logOut} color="inherit">logout</Button> :
                              <Button color="inherit"><Link to="/login">Login</Link></Button>
                         }

                    </Toolbar>
               </AppBar>
          </Box>
     );
};

export default Header;