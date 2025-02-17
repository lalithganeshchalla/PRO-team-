import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, InputBase, Container, Grid, Card, CardContent } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import image1 from "./assets/ccc.jpg";
import intenship from "./assets/intenship.png";
import mentors from "./assets/mentors.png";
import jobs from "./assets/jobs.png";
import more from "./assets/more.png";
import awades from "./assets/awades.png";
import aechives from "./assets/aechives.png";

const Home = () => {
  return (
    <Box>
      {/* Navbar */}
      <AppBar position="static" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
            <span style={{ background: "#66ff66", padding: "5px 10px", borderRadius: "20px" }}>Master</span> Code
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px" }}>
              <SearchIcon />
              <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1 }} />
            </Box>
            <Button sx={{ color: "#000" }}>Internships</Button>
            <Button sx={{ color: "#000" }}>Jobs</Button>
            <Button sx={{ color: "#000" }}>Competitions</Button>
            <Button sx={{ color: "#000" }}>Mentors</Button>
            <Button sx={{ color: "#000" }}>Practice</Button>
            <Button variant="contained" sx={{ background: "#007bff" }}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ display: "flex", alignItems: "center", marginTop: 5 }}>
      <img src={image1} alt="home" style={{ width: "200px" }} />
        <Box sx={{ textAlign: "left", marginLeft: 4 }}>
          <Typography variant="h4">
            <span style={{ color: "#00cc00", fontWeight: "bold" }}>Master</span> of Your Career
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#666", margin: "10px 0" }}>
            Discover worldwide opportunities to enhance your skills, build an impressive CV, and land your dream job
          </Typography>
        </Box>
      </Container>
      {/* Feature Cards */}
      <Container sx={{ marginTop: 5 }}>
        <Grid container spacing={3} sx={{ justifyContent: 'flex-end' }}>
          {[
            {img: <img src={intenship} alt="intenship" />, title: "Internships", desc: "Gain Practical Experience", color: "#cceeff" },
            {img: <img src={jobs} alt="intenship" />, title: "Jobs", desc: "Explore Diverse Careers", color: "#ffccdd" },
            {img: <img src={aechives} alt="intenship" />, title: "Competitions", desc: "Battle For Excellence", color: "#ffddaa" },
            {img: <img src={mentors} alt="intenship" />, title: "Mentors", desc: "Guidance From Top Mentors", color: "#ffffcc" },
            {img: <img src={awades} alt="intenship" />, title: "Practice", desc: "Refine Skills Daily", color: "#ccffcc" },
            {img: <img src={more} alt="intenship" />, title: "More", desc: "", color: "#e0c3fc" },
          ].map((item, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Card sx={{ background: item.color, borderRadius: "20px", display: "flex", flexDirection: "row-reverse" }}>
                {item.img && <Box sx={{ display: 'flex', width:'100px', height:'100px' }}>{item.img}</Box>}
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>{item.desc}</Typography>
                </CardContent>
              </Card>            
            </Grid>
          ))}
        </Grid>
      </Container>      {/* User Categories */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Who's using Master Code?
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "Students and Professionals", desc: "Compete, Build Resume, Grow and get Hired!" },
            { title: "Companies and Recruiters", desc: "Hire, Engage, and Brand Like Never Before!" },
            { title: "Colleges", desc: "Bridge Academia and Industry with Real-World Opportunities!" },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ border: "1px solid #ddd", borderRadius: "20px", textAlign: "center", padding: "20px" }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>{item.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default Home;
