import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UpdateIcon from '@mui/icons-material/Update';

const InternshipDetails = ({ internship }) => {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: '10px',
      }}
    >
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight="bold">
            {internship.title}
          </Typography>
          <Button variant="contained" color="success">
            Apply
          </Button>
        </Stack>
        <Typography variant="subtitle1" color="textSecondary">
          {internship.company}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <LocationOnIcon color="action" />
          <Typography variant="body2">{internship.location}</Typography>
          <UpdateIcon color="action" />
          <Typography variant="body2">Updated On: {internship.updatedOn}</Typography>
        </Stack>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
          Eligibility
        </Typography>
        <Typography variant="body2">{internship.eligibilityDetails}</Typography>
      </CardContent>
    </Card>
  );
};

export default InternshipDetails;
