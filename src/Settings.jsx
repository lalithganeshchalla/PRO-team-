import React, { useState } from 'react';
import { Box, AppBar, Toolbar, InputBase, Button, Avatar, Typography, Accordion, AccordionSummary, AccordionDetails, Card, List, ListItemButton, ListItemIcon, ListItemText, Link } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Search as SearchIcon } from '@mui/icons-material';
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
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './assets/Logo.png';
import Buttons from './components/ButtonDropDown';
import LanguageDropDown from './components/LanguageDropDown';
import ProfileUpdate from './components/ProfileUpdation';

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Activities", icon: <EventIcon />, path: "/activities" },
    { text: "Teams", icon: <TeamIcon />, path: "/teams" },
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

  const handleSelect = (path) => {
    navigate(path);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
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

      {/* Sidebar */}
      <Box sx={{ width: '250px', padding: '20px', backgroundColor: '#fff', height: '100vh', mt: 8 }}>
     
        <List>
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

      {/* Settings Content */}
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Settings
        </Typography>
        <Card sx={{ borderRadius: "20px", p: 2 }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Password</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Change your password here.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Profile</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Update your profile information here.</Typography>
            </AccordionDetails>
          </Accordion>
        </Card>
      </Box>
    </Box>
  );
};

export default Settings;
