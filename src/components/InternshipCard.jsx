import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

const InternshipCard = ({ title, company, daysLeft, eligibility }) => {
  return (
    <Card sx={{ mb: 2, borderLeft: '4px solid blue', cursor: 'pointer', ":hover": { boxShadow: 3 } }}>
      <CardContent>
        <Typography variant="h6" color="primary">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{company}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>⏳ {daysLeft} days left</Typography>
        <Box mt={1}>
          {eligibility.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ mr: 1, background: '#ddd' }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
