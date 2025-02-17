import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import image from './image.png';
import masterCodeImage from './master_code_image.png';

const CareerPlan = () => {

  const dottedButtonStyle = {
    border: '1px dashed #ccc',
    padding: '12px 24px',
    width: '100%',
    fontSize: '0.5rem',
    textTransform: 'none',
    fontFamily: 'Inter, sans-serif',
    color: 'black',
    borderRadius: '100px',
  };

  const curvedButtonStyle = {
    fontFamily: 'Inter, sans-serif',
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '100px',
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'lightgrey' }}>
      <Card sx={{
        maxWidth: '1000px',
        width: '100%',
        borderRadius: '0 100px 0 100px',
        margin: 'auto 20px'
      }}>
        <CardContent sx={{ padding: '40px 50px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'top', mb: 4 }}>
                  <img src={masterCodeImage} alt="Master Code" style={{ maxWidth: '200px', maxHeight: '75px', marginRight: '15px' }} />
                </Box>
                <img src={image} alt="image" style={{ maxWidth: '100%', height: 'auto' }} />
              </Grid>

              <Grid item xs={3} sm={3} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'top', mb:12 }}>
                  <Typography variant="h3" sx={{ mb: 1, color: '#6E6E6E', fontSize: '30px', fontFamily: 'Inter, sans-serif' }}>
                    Ready to Be Masters
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 2, fontSize: '10px', fontFamily: 'Inter, sans-serif' }}>Plan your Career</Typography>
                  <Typography variant="h5" sx={{ mb: 1, fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>Purpose</Typography>

                  <Grid container spacing={1} sx={{ mb: 1 }}>
                    <Grid item xs={5}>
                      <Button variant="outlined" sx={dottedButtonStyle}>To find job</Button>
                    </Grid>
                    <Grid item xs={7}>
                      <Button variant="outlined" sx={dottedButtonStyle}>To Host an Event</Button>
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs={5}>
                      <Button variant="outlined" sx={dottedButtonStyle}>Complete&Upskill</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="outlined" sx={dottedButtonStyle}>Data Scientists</Button>
                    </Grid>
                  </Grid>

                </Box>
              </Grid>
            </Grid>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '30px',
              padding: '30px',
              borderTop: '1px solid #ccc',
              mx: '-60px'
            }}>
              <Button
                variant="contained"
                sx={{
                  ...curvedButtonStyle,
                  backgroundColor: 'white',
                  color: 'black'
                }}
              >
                &lt; Back
              </Button>
              <Button variant="contained" color="primary" sx={curvedButtonStyle}>
                Next
              </Button>
            </Box>

          </Box>
        </CardContent>
      </Card>
    </Box>
    
  );
};
//this is change

export default CareerPlan;