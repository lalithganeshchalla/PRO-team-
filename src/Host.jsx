import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  IconButton,
    Avatar,
    InputBase,
} from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import logo from "./assets/Logo.png";
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdate from "./components/ProfileUpdation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";

import {
  Email,
  TrendingUp,
  EmojiEvents,
  QuestionAnswer,
  Groups,
  Celebration,
  School,
  Info,
} from "@mui/icons-material";

const opportunityData = [
  {
    title: "Activities & Coding Challenges",
    linkText: "Create Activities →",
    icon: <EmojiEvents sx={{ color: "#f97316" }} />,
  },
  {
    title: "General & Case Competitions",
    linkText: "Create Competitions →",
    icon: <TrendingUp sx={{ color: "#ef4444" }} />,
  },
  {
    title: "Innovation Challenges",
    linkText: "Create Challenges →",
    icon: <QuestionAnswer sx={{ color: "#3b82f6" }} />,
  },
  {
    title: "Quizzes",
    linkText: "Create Quizzes →",
    icon: <QuestionAnswer sx={{ color: "#10b981" }} />,
  },
  {
    title: "Webinars & Workshops",
    linkText: "Create Workshops →",
    icon: <Groups sx={{ color: "#ec4899" }} />,
  },
  {
    title: "Cultural Events",
    linkText: "Create Events →",
    icon: <Celebration sx={{ color: "#60a5fa" }} />,
  },
  {
    title: "Conferences",
    linkText: "Create Conferences →",
    icon: <School sx={{ color: "#f43f5e" }} />,
  },
  {
    title: "Scholarships",
    linkText: "Create Scholarships →",
    icon: <School sx={{ color: "#ef4444" }} />,
  },
];

const HostScreen = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => {
      setIsDrawerOpen(true);
    };
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };
    const navigate = useNavigate();
  return (
    <Box sx={{ padding: 4 }}>
      {/* Top Banner Section */}
      <AppBar position="fixed" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0", maxWidth: "100%", top: 0 }}>
        <Toolbar sx={{ display: "flex" }}>
          <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px", color: "#b5b5b5" }}>
              <SearchIcon />
              <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1 }} />
            </Box>
            <Button sx={{ color: "#000"}} onClick={() => navigate("/internship")}>Internships</Button>
            <Button sx={{ color: "#000" }} onClick={() => navigate("/jobs")}>Jobs</Button>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "url('https://via.placeholder.com/1200x400')",
          backgroundSize: "cover",
          borderRadius: "10px",
          padding: 4,
          color: "white",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold">
            Host an Opportunity
          </Typography>
          <Typography variant="h6">
            Choose your opportunity category from below
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<Email />}
            sx={{ backgroundColor: "#a78bfa" }}
          >
            Send Bulk Emails
          </Button>
          <Button
            variant="contained"
            startIcon={<TrendingUp />}
            sx={{ backgroundColor: "#34d399" }}
          >
            Boost Applications
          </Button>
        </Box>
      </Box>

      {/* What you want to host Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          What you want to host{" "}
          <span role="img" aria-label="hand">
            🤘
          </span>
        </Typography>

        <Box
          sx={{
            backgroundColor: "#f3e8ff",
            borderRadius: "10px",
            padding: 3,
            marginTop: 2,
          }}
        >
          <Grid container spacing={3}>
            {opportunityData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        marginBottom: 1,
                      }}
                    >
                      {item.icon}
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                    </Box>
                    <Button
                      variant="text"
                      sx={{ textTransform: "none", color: "#3b82f6" }}
                    >
                      {item.linkText}
                    </Button>
                    <IconButton>
                      <Info sx={{ color: "gray" }} />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HostScreen;
