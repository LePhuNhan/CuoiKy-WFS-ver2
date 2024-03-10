import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear'; // Import ClearIcon
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://teachingk18.github.io/WF_Test_ver2/data.json`)
      .then(response => response.json())
      .then(data => {
        const foundMovie = data.find(movie => movie.ID === parseInt(id));
        setMovie(foundMovie);
      })
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            {/* Replace Button with ClearIcon */}
            <ClearIcon style={{ position:'absolute', marginLeft:'50%' }}/>
          </Link>
        </Grid>
        {movie ? (
          <>
            <Grid item xs={4}>
              <img src={movie.image} alt={movie.name} style={{ width: '20%',borderRadius:'15px', height:'65%', marginLeft:'-80px', position:'absolute', marginTop:'-80px' }} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4" style={{marginTop:'30px'}}>{movie.name}</Typography>
              <Typography variant="body2" style={{fontWeight:'100'}}>{movie.time} min {movie.year}</Typography>
              <Typography variant="body1" style={{fontWeight:'100',marginTop:'5%'}}>{movie.introduce}</Typography>
              <Button variant="contained" color="primary" style={{marginBottom:'-30%', borderRadius:'15px', backgroundColor:'orange'}}><ArrowRightIcon style={{marginLeft:'-10px'}}></ArrowRightIcon>Play Movie</Button>
            </Grid>
          </>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </Grid>
    </Box>
  );
}
