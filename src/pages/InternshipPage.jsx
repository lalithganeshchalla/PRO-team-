import { Container, Grid } from '@mui/material';
import InternshipDetails from '../components/InternshipDetails';

const internship = {
  title: "Campus Ambassador Internship",
  company: "Pluntx",
  location: "Hyderabad",
  updatedOn: "Feb 7, 2025",
  applicants: "1,78,577",
  impressions: "1,50,067",
  stipend: "10K - 20K/Month",
  applicationDeadline: "3 days left",
  eligibility: "Open to all Undergraduate and Postgraduate Students, Freshers, and Experienced Individuals.",
  importantDates: "Application Deadline: 08 Jan 26, 11:00 AM IST",
};

const InternshipPage = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <InternshipDetails internship={internship} />
        </Grid>
      </Grid>
    </Container>
  );  
};

export default InternshipPage;
