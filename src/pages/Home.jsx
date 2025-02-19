import { Container, Grid } from '@mui/material';
import InternshipCard from '../components/InternshipCard';

const internships = [
  { title: "Ambassador Internship", company: "Pluntx", daysLeft: 27, eligibility: ["B-Tech Students", "+2"] },
  { title: "Campus Ambassador Internship", company: "Pluntx", daysLeft: 27, eligibility: ["B-Tech Students", "+2"] },
];

const Home = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {internships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
