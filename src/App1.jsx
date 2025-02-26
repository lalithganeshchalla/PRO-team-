import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, InputBase, Container, Grid, Card, CardContent, Menu, MenuItem, IconButton, Avatar ,Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from "@mui/icons-material/Add";
import PublicIcon from "@mui/icons-material/Public";

import image1 from "./assets/ccc.jpg";
import intenship from "./assets/intenship.png";
import mentors from "./assets/mentors.png";
import jobs from "./assets/jobs.png";
import more from "./assets/more.png";
import awades from "./assets/awades.png";
import aechives from "./assets/aechives.png";
import student from "./assets/student.png";
import compani from "./assets/compani.png";
import colleges from "./assets/colleges.png";
import profileImage from './assets/display.png';

import './App.css';

const Home = () => {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [engAnchorEl, setEngAnchorEl] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [active, setActive] = useState(false);

  const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleMoreClick = (event) => setMoreAnchorEl(event.currentTarget);
  const handleEngClick = (event) => setEngAnchorEl(event.currentTarget);
  const handleClose = () => {
    setProfileAnchorEl(null);
    setMoreAnchorEl(null);
    setEngAnchorEl(null);
  };
  const handleActiveClick = () => setActive(!active);
  const handleImageError = () => setImageError(true);

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <MenuItem key={index} onClick={handleClose}>
        {item}
      </MenuItem>
    ));
  };

    // Dummy user info (Replace this with real user data)
    const user = {
      name: "Master Code",
      email: "mastercode@example.com"
    };

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

            {/* More Dropdown */}
            <Button sx={{ color: "#000", display: "flex", alignItems: "center" }} onClick={handleMoreClick}>
              More <ExpandMoreIcon sx={{ fontSize: 18, marginLeft: 1 }} />
            </Button>
            <Menu anchorEl={moreAnchorEl} open={Boolean(moreAnchorEl)} onClose={handleClose}>
              {renderMenuItems(["Option 1", "Option 2", "Option 3"])}
            </Menu>

            {/* Language Dropdown */}
            <Button sx={{ color: "#000" }} onClick={handleEngClick}>
              <PublicIcon sx={{ fontSize: 20, marginRight: 1 }} /> Eng
            </Button>
            <Menu anchorEl={engAnchorEl} open={Boolean(engAnchorEl)} onClose={handleClose}>
              {renderMenuItems(["English", "العربية", "Deutsch", "Español", "Français", "Hindi", "Magyar", "中文"])}
            </Menu>

            {/* Active Toggle Button */}
            <Box sx={{ position: "relative", display: "flex", alignItems: "center", cursor: "pointer", backgroundColor: "#e0e0e0", padding: "6px 12px", borderRadius: "20px", transition: "all 0.3s ease" }} onClick={handleActiveClick}>
              <Typography variant="body2" sx={{ marginRight: 2 }}></Typography>
              <Box sx={{
                position: "absolute",
                left: active ? "50%" : "5px",
                top: "2px",
                width: "10px",
                height: "10px",
                backgroundColor: "#66ff66",
                borderRadius: "200%",
                transition: "left 0.3s ease",
              }} />
            </Box>

            {/* Notification Icon */}
            <IconButton sx={{ color: "#000" }}>
              <NotificationsIcon />
            </IconButton>

            {/* Profile Button */}
            <IconButton onClick={handleProfileClick}>
              <Avatar sx={{ bgcolor: "#66ff66" }} src={imageError ? "" : profileImage} onError={handleImageError}>
                {imageError ? <AccountCircleIcon sx={{ fontSize: 40, color: "#fff" }} /> : null}
              </Avatar>
            </IconButton>

            {/* Profile Menu */}
            <Menu anchorEl={profileAnchorEl} open={Boolean(profileAnchorEl)} onClose={handleClose}>
              <Box sx={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "#66ff66" }} src={imageError ? "" : profileImage} onError={handleImageError}>
                  {imageError ? <AccountCircleIcon sx={{ fontSize: 40, color: "#fff" }} /> : null}
                </Avatar>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {user.email}
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ margin: "10px 0" }} />

            <Box sx={{ padding: "10px 20px" }}>
           <Typography variant="body1" sx={{ fontWeight: "bold", color: "#000" }}>
             You are missing out  
           </Typography>
          <Typography variant="body2" sx={{ color: "#444", marginBottom: "5px" }}>
           on opportunities to create an impact!
           </Typography>
           <Typography 
            variant="body2" 
             sx={{ color: "#66cc66", cursor: "pointer", fontWeight: "bold" }}>
             Complete My Profile
            </Typography>
            </Box>
              <Divider />
              {renderMenuItems(["Activities", "Team", "Levels", "Leaderboard","Applied Activities","Tasks","Notifications","My Transactions","Support", "Settings", "Logout"])}
              <Divider sx={{ margin: "10px 0" }} />
              {/* Mentors & Dashboard Section */}
              <Box sx={{ padding: "10px 20px" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "#000" }}>
                 Mentors
                </Typography>
               <MenuItem onClick={handleClose}>My Dashboard</MenuItem>
             </Box>
            </Menu>

            {/* Host Button */}
            <Button sx={{ color: "#000", border: "2px solid #66ff66", borderRadius: "20px", padding: "8px 16px", display: "flex", alignItems: "center", gap: 1 }}>
              <AddIcon sx={{ color: "#66ff66" }} /> Host
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ marginTop: 5 }}>
        <Grid container spacing={3} alignItems="center">
          {/* Left Side - Image and Text */}
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: "center" }}>
              <img src={image1} alt="Career Growth" style={{ width: "100%", borderRadius: "10px" }} />
              <Typography variant="h4" sx={{ marginTop: 2 }}>
                <span style={{ color: "#00cc00", fontWeight: "bold" }}>Master</span> of Your Career
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#666", margin: "10px 0" }}>
                Discover worldwide opportunities to enhance your skills, build an impressive CV, and land your dream job.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side - Feature Cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {[
                { img: intenship, title: "Internships", desc: "Gain Practical Experience", color: "#cceeff" },
                { img: jobs, title: "Jobs", desc: "Explore Diverse Careers", color: "#ffccdd" },
                { img: aechives, title: "Competitions", desc: "Battle For Excellence", color: "#ffddaa" },
                { img: mentors, title: "Mentors", desc: "Guidance From Top Mentors", color: "#ffffcc" },
                { img: awades, title: "Practice", desc: "Refine Skills Daily", color: "#ccffcc" },
                { img: more, title: "More", desc: "Discover More", color: "#e0c3fc" },
              ].map((item, index) => (
                <Grid item xs={5} sm={5} key={index}>
                  <Card sx={{ background: item.color, borderRadius: "20px", display: "flex", flexDirection: "row-reverse", padding: "10px" }}>
                    <Box sx={{ width: "80px", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <img src={item.img} alt={item.title} style={{ width: "80%", height: "80%", objectFit: "contain" }} />
                    </Box>
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      {/* User Categories */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Who's using Master Code?
        </Typography>
        <Grid container spacing={3} sx={{ justifyContent: "flex-start" }}>
          {[
            { img: student, title: "Students and Professionals", desc: "Compete, Build Resume, Grow and get Hired!", color: "#cceeff" },
            { img: compani, title: "Companies and Recruiters", desc: "Hire, Engage, and Brand Like Never Before!", color: "#ffccdd" },
            { img: colleges, title: "Colleges", desc: "Bridge Academia and Industry!", color: "#ffffcc" },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card sx={{ borderRadius: "40px", display: "flex", flexDirection: "row-reverse", padding: "10px" }}>
                <Box sx={{ width: "80px", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src={item.img} alt={item.title} style={{ width: "80%", height: "80%", objectFit: "contain" }} />
                </Box>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
