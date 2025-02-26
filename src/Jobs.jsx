// JobsScreen.jsx
import React from "react";
import { useState } from "react";
import job from "./assets/company.png";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
    InputBase,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import logo from "./assets/Logo.png";
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdate from "./components/ProfileUpdation";
import Avatar from "./components/Avatars";
import { Search as SearchIcon} from "@mui/icons-material";

import {
  CalendarToday,
  FavoriteBorder,
  People,
  AccessTime,
  Star,
} from "@mui/icons-material";

const jobData = [
  {
    title: "Ambassador Internship",
    company: "Pluntx",
    daysLeft: "27 days left",
    eligibility: "B-Tech Students",
    additional: "+2",
  },
];

const JobsScreen = () => {
    
      const openDrawer = () => {
        setIsDrawerOpen(true);
      };
    
      const closeDrawer = () => {
        setIsDrawerOpen(false);
      };
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        
      
        
      const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex",paddingTop: 10 }}>
      {/* Left Side Job Listings */}
      <Box sx={{ width: "30%", pr: 2 }}>
        {jobData.map((job, index) => (
          <Card
            key={index}
            sx={{
              marginBottom: 2,
              borderLeft: "5px solid #6e00ff",
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ color: "#3b82f6" }}>
                {job.title}
              </Typography>
              <Typography variant="body2">{job.company}</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {job.daysLeft}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 1,
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#e0e0e0",
                    color: "#000",
                  }}
                >
                  {job.eligibility}
                </Button>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {job.additional}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Right Side Job Details */}
      <Box sx={{ flex: 1, padding: 2 }}>
      <AppBar position="fixed" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0", maxWidth: "100%", top: 0 }}>
        <Toolbar sx={{ display: "flex" }}>
          <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px", color: "#b5b5b5" }}>
              <SearchIcon />
              <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1 }} />
            </Box>
            <Button sx={{ color: "#000"}} onClick={() => navigate("/internship")}>Internships</Button>
            <Button sx={{ color: "#fff" ,backgroundColor:"#9dff8a" ,width:"50px",fontWeight:"700"}} onClick={() => navigate("/jobs")}>Jobs</Button>
            <Button sx={{ color: "#000" }} onClick={() => navigate("/competitions")}>Competitions</Button>
            <Button sx={{ color: "#000" }} onClick={() => navigate("/mentors")}>Mentors</Button>
            <Button sx={{ color: "#000" }} onClick={() => navigate("/practice")}>Practice</Button>
            <Buttons />
            <LanguageDropDown />
            <Avatar onClick={openDrawer} />
            <ProfileUpdate open={isDrawerOpen} onClose={closeDrawer} />
            <Button variant="outlined" sx={{ borderRadius: "25px" }} onClick={() => navigate("/host")}>Host</Button>
          </Box>
        </Toolbar>
      </AppBar>
        <Card sx={{ padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  component="img"
                  src={job}
                  alt="Company Logo"
                  sx={{ width: "80px", height: "80px" }}
                />
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    Campus Ambassador Internship
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    Pluntx
                  </Typography>
                  <Typography variant="body2" color="gray">
                    Hyderabad
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    Updated On: Feb 7, 2025
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: "20px", width: "100%" }}
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Card>

        <Box sx={{ display: "flex", gap: 2, marginY: 2 }}>
          <IconButton>
            <CalendarToday />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </Box>

        <Card sx={{ padding: 2, marginBottom: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box>
                <People sx={{ color: "#000" }} />
                <Typography variant="body2" fontWeight="bold">
                  Applicants
                </Typography>
                <Typography variant="body2">1,78,577</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <AccessTime sx={{ color: "#000" }} />
                <Typography variant="body2" fontWeight="bold">
                  Application Deadline
                </Typography>
                <Typography variant="body2">3 days left</Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <Star sx={{ color: "#000" }} />
                <Typography variant="body2" fontWeight="bold">
                  Impressions
                </Typography>
                <Typography variant="body2">1,50,067</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>

        <Card sx={{ padding: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Eligibility
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Open to all: Undergraduate and Postgraduate Students, Freshers and Experience Individuals.
          </Typography>
        </Card>

        <Card sx={{ padding: 2, marginTop: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Important dates & Deadlines
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Application Deadline: 08 Jan 26, 11:00 AM IST
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default JobsScreen;
