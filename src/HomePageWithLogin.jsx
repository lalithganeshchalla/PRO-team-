import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, InputBase, Container, Grid, Card, CardContent } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Buttons from "./components/ButtonDropDown";
import image1 from "./assets/ccc.jpg";
import intenship from "./assets/intenship.png";
import mentors from "./assets/mentors.png";
import jobs from "./assets/jobs.png";
import more from "./assets/more.png";
import awades from "./assets/awades.png";
import aechives from "./assets/aechives.png";
import logo from "./assets/Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageDropDown from "./components/LanguageDropDown";
import Avatar from "./components/Avatars";
import ProfileUpdation from "./components/ProfileUpdation";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };
  const navigate = useNavigate();
  return (
    <Box>
        <AppBar position="fixed" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0", maxWidth: "100%" }}>
          <Toolbar sx={{ display: "flex" }}>
            <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px", color: "#b5b5b5" }}>
              <SearchIcon />
              <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1 }} />
            </Box>
            <Button sx={{ color: "#000"}} onClick={() => navigate("/internship")}>Internships</Button>
            <Button sx={{ color: "#000" }}onClick={() => navigate("/jobs")}>Jobs</Button>
            <Button sx={{ color: "#000" }}onClick={() => navigate("/competitions")}>Competitions</Button>
            <Button sx={{ color: "#000" }}onClick={() => navigate("/mentors")}>Mentors</Button>
            <Button sx={{ color: "#000" }}onClick={() => navigate("/practice")}>Practice</Button>
            <Buttons />
            <LanguageDropDown /> 
            <Avatar openDrawer={openDrawer} />
            <ProfileUpdation open={isDrawerOpen} onClose={closeDrawer} />
            <Button variant="outlined" sx={{ borderRadius: "25px" }} onClick={() => navigate("/host")}>Host</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
      <Container sx={{ display: "flex", alignItems: "center", marginTop: 12 }}>
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
      </Container>      
      {/* User Categories */}
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
