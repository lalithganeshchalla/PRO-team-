import { Box, Typography, Button, Divider, Grid } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const InternshipDetails = ({ internship }) => {
  return (
    <Box p={3} sx={{ background: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" fontWeight="bold">{internship.title}</Typography>
      <Typography variant="subtitle1" color="primary">{internship.company}</Typography>

      <Box display="flex" alignItems="center" mt={1}>
        <PlaceIcon fontSize="small" />
        <Typography variant="body2" ml={1}>{internship.location}</Typography>
      </Box>

      <Typography variant="body2" color="textSecondary" mt={1}>
        <CalendarTodayIcon fontSize="small" /> Updated On: {internship.updatedOn}
      </Typography>

      <Button variant="contained" sx={{ mt: 2, background: 'green' }}>Apply</Button>

      <Divider sx={{ my: 3 }} />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body2"><strong>Applicants:</strong> {internship.applicants}</Typography>
          <Typography variant="body2"><strong>Stipend:</strong> {internship.stipend}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2"><strong>Impressions:</strong> {internship.impressions}</Typography>
          <Typography variant="body2"><strong>Application Deadline:</strong> {internship.applicationDeadline}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6">Eligibility</Typography>
      <Typography variant="body2">{internship.eligibility}</Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>Important Dates & Deadlines</Typography>
      <Typography variant="body2">{internship.importantDates}</Typography>
    </Box>
  );
};

export default InternshipDetails;
