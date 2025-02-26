import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import { LocationOn, AccessTime } from '@mui/icons-material';

const ActivityCard = ({ title, organizer, location, applicants, timeLeft }) => {
  return (
    <Card sx={{ borderRadius: "20px", boxShadow: 3, mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: "#66ff66" }}>{organizer[0]}</Avatar>
          <Box>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" color="text.secondary">{organizer}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box>
            <LocationOn fontSize="small" color="disabled" />
            <Typography variant="body2" display="inline">{location}</Typography>
          </Box>
          <Box>
            <AccessTime fontSize="small" color="disabled" />
            <Typography variant="body2" display="inline">{timeLeft} left</Typography>
          </Box>
        </Box>
        <Button variant="outlined" sx={{ mt: 2 }}>View Details</Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
