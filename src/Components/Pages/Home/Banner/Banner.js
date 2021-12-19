import { Typography, Button, Grid } from '@mui/material';
import React from 'react';

const Banner = () => {
     return (
          <div>
               <Grid container spacing={2}>
                    <Grid item xs={8}>
                         <Typography variant="h4" gutterBottom component="div">
                              Access 2700+
                         </Typography>
                         <Typography variant="h4" gutterBottom component="div">
                              Online yellow-shapeTutorial From Top Instructor.
                         </Typography>
                         <Typography variant="body1" gutterBottom component="div">
                              Meet university,and cultural institutions, who'll share their experience.
                         </Typography>
                         <Button variant="contained">View all course</Button>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
               </Grid>


          </div>
     );
};

export default Banner;