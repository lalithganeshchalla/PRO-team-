import React  from 'react';
import Header from './components/Header';
import ActivityCard from './components/ActivityCard';
import ActivityDetails from './components/ActivityDetails';
import { Box, Grid, Container } from '@mui/material';
import { AppBar, Toolbar, InputBase, Button } from '@mui/material';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from './assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import Buttons from './components/ButtonDropDown';
import LanguageDropDown from './components/LanguageDropDown';
import Avatar from './components/Avatars';
import ProfileUpdate from './components/ProfileUpdation';
import { useLocation } from 'react-router-dom';

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
import { useState } from 'react';

const App = () => {
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
  const navigate = useNavigate();
   const openDrawer = () => {
      setIsDrawerOpen(true);
    };
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleSelect = (path) => {
      navigate(path);
    };
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };
    const location = useLocation();

  return (
    
      <Box sx={{ display: 'flex' }}>
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
        <Box sx={{ flexGrow: 1 }}>
          <Header />
          <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ActivityCard 
                  title="Master Code Talent Room 2025" 
                  organizer="Master Code" 
                  location="Online" 
                  applicants="1.78M" 
                  timeLeft="2 days"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ActivityDetails />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
  );
};

export default App;
