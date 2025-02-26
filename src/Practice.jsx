// PracticeScreen.jsx
import React from "react";
import { AppBar, Toolbar,InputBase } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./assets/Logo.png";
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdate from "./components/ProfileUpdation";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";

import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
  Avatar,
  List,
  ListItemIcon,
  ListItemText,
    ListItemButton,
} from "@mui/material";
import {
    EmojiEvents as LeaderboardIcon,
    Event as EventIcon,
    Group as TeamIcon,
    SignalCellularAlt as LevelsIcon,
    Work as AppliedActivitiesIcon,
    Assignment as TasksIcon,
    Notifications as NotificationsIcon,
    Payment as TransactionsIcon,
    Support as SupportIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon
  
  } from "@mui/icons-material";
import {
  EmojiEvents,
  WorkspacePremium,
  EmojiEventsOutlined,
  BusinessCenter,
  CalendarMonth,
  WorkHistory,
  School,
} from "@mui/icons-material";

const menuItems = [
    { text: "Activities", icon: <EventIcon />, path: "/activities" },
    { text: "Team", icon: <TeamIcon />, path: "/teams" },
    { text: "Levels", icon: <LevelsIcon />, path: "/levels" },
    { text: "Leaderboard", icon: <LeaderboardIcon />, path: "/leaderboard" },
    { text: "Applied Activities", icon: <AppliedActivitiesIcon />, path: "/applied" },
    { text: "Tasks", icon: <TasksIcon />, path: "/tasks" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
    { text: "Transactions", icon: <TransactionsIcon />, path: "/transactions" },
    { text: "Support", icon: <SupportIcon />, path: "/support" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" }
  ];

const trendingArenaItems = [
  { text: "Coding Practice", color: "#fecaca", icon: <CalendarMonth /> },
  { text: "Role Based Assessments", color: "#bbf7d0", icon: <BusinessCenter /> },
  { text: "Projects", color: "#fef9c3", icon: <WorkHistory /> },
  { text: "Skill Based Mock Tests", color: "#bae6fd", icon: <WorkspacePremium /> },
  { text: "MBA", color: "#fde68a", icon: <School /> },
  { text: "Company Preparation", color: "#e9d5ff", icon: <EmojiEventsOutlined /> },
];

const PracticeScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
    const handleSelect = (path) => {
        navigate(path);
    };

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Box
        sx={{
          width: 250,
          backgroundColor: "#f9fafb",
          height: "100vh",
          padding: 2,
          borderRight: "1px solid #e5e7eb",
        }}
      >
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
              <Button sx={{ color: "#fff" ,backgroundColor:"#9dff8a" ,width:"150px",fontWeight:"700"}} onClick={() => navigate("/practice")}>Practice</Button>
              <Buttons />
              <LanguageDropDown />
              <Avatar onClick={openDrawer} />
              <ProfileUpdate open={isDrawerOpen} onClose={closeDrawer} />
              <Button variant="outlined" sx={{ borderRadius: "25px" }}>Host</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <List sx={{paddingTop: 10}}>
          {menuItems.map((item, index) => (
            <ListItemButton 
              key={index} 
              onClick={() => handleSelect(item.path)}
              sx={{ 
                borderRadius: "10px", 
                marginBottom: "8px", 
                backgroundColor: location.pathname === item.path ? "#66ff66" : "transparent",
                "&:hover": { backgroundColor: location.pathname === item.path ? "#50cc50" : "#f0f0f0" }
              }}
            >
              <ListItemIcon sx={{ color: item.color }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  color: location.pathname === item.path ? "#000" : item.color, 
                  fontWeight: location.pathname === item.path ? "bold" : "normal" 
                }} 
              />
            </ListItemButton>
          ))}
        </List>


      </Box>

      {/* Main Content */}
      <Box flex={1} padding={4}>
        <Typography variant="h3" fontWeight="bold" mb={2}>
          <span style={{ color: "#6366f1" }}>Achieve</span> Excellence
        </Typography>
        <Typography variant="body1" mb={3}>
          Solve easy to complex problems & get hands-on experience to get hired
          by your dream company!
        </Typography>

        <Button
          variant="contained"
          startIcon={<EmojiEvents />}
          sx={{
            backgroundColor: "#c4b5fd",
            color: "#292524",
            mb: 4,
            textTransform: "none",
          }}
        >
          Grab Pre-Placement Offers
        </Button>

        <Typography variant="h4" fontWeight="bold" mb={2}>
          Trending Arena
        </Typography>

        <Grid container spacing={3}>
          {trendingArenaItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.text}>
              <Card
                sx={{
                  backgroundColor: item.color,
                  borderRadius: "10px",
                  padding: 2,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center" mb={1}>
                    <IconButton size="large">{item.icon}</IconButton>
                    <Typography variant="h6" fontWeight="bold">
                      {item.text}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PracticeScreen;
