import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const InternshipCard = ({ internship, selected, onSelect }) => {
  return (
    <Card
      onClick={() => onSelect(internship.id)}
      sx={{
        mb: 2,
        borderLeft: selected ? '4px solid #00FF00' : '4px solid transparent',
        boxShadow: selected ? 5 : 2,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 5,
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          {internship.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {internship.company}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
          <AccessTimeIcon fontSize="small" />
          <Typography variant="body2">{internship.duration}</Typography>
        </Stack>
        <Chip label={internship.eligibility} variant="outlined" sx={{ mt: 1 }} />
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
