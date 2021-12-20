import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Service from '../Service/Service';

const Services = () => {

     const courses = [
          {
               id: 1,
               coursesName: 'Data Science',
               description: 'data is everything',
               image: 'https://i.ibb.co/XtjRm1H/1.jpg'

          }
     ]


     return (
          <div>
               <Container>
                    <Box sx={{ flexGrow: 1 }}>
                         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                              {
                                   courses.map(course => <Service
                                        key={course.id}
                                        course={course}
                                   ></Service>)
                              }
                         </Grid>
                    </Box>
               </Container>
          </div>
     );
};

export default Services;