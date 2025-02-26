import React from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
import { CalendarToday, EmojiEvents } from '@mui/icons-material';
import { useState } from "react";
import {  List, ListItemButton, ListItemIcon, ListItemText 
} from "@mui/material";
import logo from "./assets/Logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdate from "./components/ProfileUpdation";
import Avatar from './components/Avatars';
import { useNavigate } from "react-router-dom";

import {
  Event as EventIcon,
  Group as TeamIcon,
  SignalCellularAlt as LevelsIcon,
  EmojiEvents as LeaderboardIcon,
  Work as AppliedActivitiesIcon,
  Assignment as TasksIcon,
  Notifications as NotificationsIcon,
  Payment as TransactionsIcon,
  Support as SupportIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon
} from "@mui/icons-material";
const AppliedActivities = () => {
    const [selected, setSelected] = useState("Applied Activities");
  const navigate = useNavigate();
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
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

  const handleSelect = (item) => {
    setSelected(item.text);
    navigate(item.path);
  };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ 
      width: "250px", 
      minHeight: "100vh", 
      background: "#fff", 
      padding: "20px",
      paddingTop: "80px", 
      display: "flex", 
      flexDirection: "column",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
    }}>
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
            <Button variant="outlined" sx={{ borderRadius: "25px" }}>Host</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton 
            key={index} 
            onClick={() => handleSelect(item)}
            sx={{ 
              borderRadius: "10px", 
              marginBottom: "8px", 
              backgroundColor: selected === item.text ? "#66ff66" : "transparent",
              "&:hover": { backgroundColor: selected === item.text ? "#50cc50" : "#f0f0f0" }
            }}
          >
            <ListItemIcon sx={{ color: item.color === "red" ? "red" : "#000" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: selected === item.text ? "#000" : (item.color === "red" ? "red" : "#000"), 
                fontWeight: selected === item.text ? "bold" : "normal" 
              }} 
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
    
        <Box sx={{ flex: 2, padding: '20px', bgcolor: '#F5F5F5' , marginTop: "80px"}}>
          <Typography variant="h5" gutterBottom>Applied Activities</Typography>
          <Card sx={{ display: 'flex', bgcolor: '#FFEAEA', padding: '20px', borderRadius: '15px' }}>
            <Box sx={{ flex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
                <Button variant="contained" sx={{ bgcolor: '#00D100', color: 'white', borderRadius: '20px', mr: 2 }}>
                  Master Code
                </Button>
                <Typography variant="h6">Master Code Talent Room 2025</Typography>
              </Box>
              <Typography variant="subtitle2" color="textSecondary">Master Code</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <CalendarToday sx={{ fontSize: 18, mr: 1 }} />
                <Typography variant="body2">Updated On: May 10, 2025</Typography>
              </Box>
              <Card sx={{ bgcolor: '#DFFFD8', padding: '10px', mt: 2, borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
                <EmojiEvents sx={{ color: '#FFC107', mr: 1 }} />
                <Typography variant="body2">Grab Pre-Placement Offers & Cash prizes worth 3,53,000</Typography>
              </Card>
            </Box>
            <Box sx={{ flex: 1, ml: 3, bgcolor: 'white', padding: '20px', borderRadius: '15px' }}>
              <Typography variant="h6" gutterBottom>Hello Tom</Typography>
              <Button variant="contained" sx={{ bgcolor: '#FFD700', color: 'black', width: '100%', mb: 2 }}>
                You've Registered
              </Button>
              <Typography variant="body2" gutterBottom>Registered: 1,78,000</Typography>
              <Typography variant="body2" gutterBottom>Team Size: 1-4 members</Typography>
              <Typography variant="body2" gutterBottom>Impressions: 2,679</Typography>
              <Typography variant="body2">Application Deadline: 22 Feb 25, 06:00 PM IST</Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    );
  };

export default AppliedActivities;
