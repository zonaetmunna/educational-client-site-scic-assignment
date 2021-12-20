import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Service = ({ course }) => {
     const { id, courseName, description, image } = course;
     const navigate = useNavigate();

     const handleSingleCourse = () => {
          const url = `/service/${id}`;
          navigate(url);
     }

     return (

          <Grid item xs={2} sm={4} md={4} >
               <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                         component="img"
                         height="140"
                         image={image}
                         alt="green iguana"
                    />
                    <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                              {courseName}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                              {description}
                         </Typography>
                    </CardContent>
                    <CardActions>
                         <Button onClick={handleSingleCourse} size="small">Learn more</Button>
                    </CardActions>
               </Card>
          </Grid>

     );
};

export default Service;