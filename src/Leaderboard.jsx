import React from 'react';
import { useState } from 'react';
import { Box, AppBar, Toolbar, InputBase, Button, List, ListItemButton, ListItemIcon, ListItemText, Card, Typography, Grid } from '@mui/material';
import { Search as SearchIcon, EmojiEvents as LeaderboardIcon, Event as EventIcon, Group as TeamIcon, SignalCellularAlt as LevelsIcon, Work as AppliedActivitiesIcon, Assignment as TasksIcon, Notifications as NotificationsIcon, Payment as TransactionsIcon, Support as SupportIcon, Settings as SettingsIcon, Logout as LogoutIcon } from '@mui/icons-material';
import logo from './assets/Logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Buttons from './components/ButtonDropDown';
import LanguageDropDown from './components/LanguageDropDown';
import ProfileUpdate from './components/ProfileUpdation';
import Avatar from './components/Avatars';

const Leaderboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
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
      <Box sx={{ width: '250px', padding: '20px', backgroundColor: '#fff', height: '100vh' }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton 
              key={index} 
              onClick={() => navigate(item.path)}
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
                sx={{ color: location.pathname === item.path ? "#000" : item.color, fontWeight: location.pathname === item.path ? "bold" : "normal" }} 
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Rankings
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={4}>
            <Card sx={{ borderRadius: "20px", p: 2, backgroundColor: '#ffffcc' }}>
              <Typography variant="h6" fontWeight="bold">🥇 George Reddy</Typography>
              <Typography>2347 points - 12 achievements</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ borderRadius: "20px", p: 2, backgroundColor: '#f0f0f0' }}>
              <Typography variant="h6" fontWeight="bold">🥈 Vishnu Reddy</Typography>
              <Typography>2347 points</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ borderRadius: "20px", p: 2, backgroundColor: '#ffcc99' }}>
              <Typography variant="h6" fontWeight="bold">🥉 Chandana</Typography>
              <Typography>2347 points</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Leaderboard;
