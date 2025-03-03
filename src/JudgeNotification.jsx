import React from 'react';
import { Box, AppBar,Drawer, Toolbar, InputBase, Button, List, ListItemButton, ListItemIcon, ListItemText, Card, Typography, Grid } from '@mui/material';
import { Search as SearchIcon, EmojiEvents as LeaderboardIcon, Event as EventIcon, Group as TeamIcon, SignalCellularAlt as LevelsIcon, Work as AppliedActivitiesIcon, Assignment as TasksIcon, Notifications as NotificationsIcon, Payment as TransactionsIcon, Support as SupportIcon, Settings as SettingsIcon, Logout as LogoutIcon } from '@mui/icons-material';
import logo from './assets/Logo.png';
import Buttons from './components/ButtonDropDown';
import LanguageDropDown from './components/LanguageDropDown';
import ProfileUpdate from './components/ProfileUpdation';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from './components/Avatars';
import { Home, Assignment, Assessment, BarChart, Notifications, Analytics } from '@mui/icons-material';


const Leaderboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { text: "Home", icon: <Home /> ,path: "/home" },
     { text: "Assignments", icon: <Assignment /> ,path: "/assignment" },
     { text: "Submission Evaluation", icon: <Assessment /> ,path: "/submissionevaluation" },
     { text: "Progress Monitoring", icon: <BarChart /> ,path: "/progressmonitoring" },,
     { text: "Notifications", icon: <Notifications /> ,path: "/judgenotification" },
     { text: "Reports & Analysis", icon: <Analytics /> ,path: "/report" },
    { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" }
  ];
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };
    const openDrawer = () => {
      setIsDrawerOpen(true);
    };
    const handleSelect = (item) => {
        setSelected(item.text);
        navigate(item.path);  };
          const [selected, setSelected] = useState("Notifications");
  return (
    <Box sx={{ display: 'flex' }}>
       <AppBar
        position="fixed"
        sx={{
          background: "#fff",
          boxShadow: "none",
          padding: "10px 0",
          maxWidth: "100%",
          top: 0,
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#f5f5f5",
                padding: "5px 10px",
                borderRadius: "20px",
                color: "#b5b5b5",
              }}
            >
              <SearchIcon />
              <InputBase placeholder="Search Hackathons" sx={{ width: "500px" }} />
            </Box>
            <LanguageDropDown />
            <Avatar onClick={() => setIsDrawerOpen(true)} />
            <Button sx={{ borderRadius: "25px" }}>JudgeName</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: '250px', padding: '20px', backgroundColor: '#fff', height: '100vh' }}>
        <Drawer
               variant="permanent"
               sx={{
                 width: 260,
                 flexShrink: 0,
                 [`& .MuiDrawer-paper`]: { width: 260, boxSizing: "border-box", marginTop: "85px" },
               }}
             >
               <List>
                 {menuItems.map((item, index) => (
                   <ListItemButton
                   key={index} 
                   onClick={() => handleSelect(item)}
                   sx={{ 
                     borderRadius: "10px", 
                     marginBottom: "8px", 
                     margin: "6px",
                     backgroundColor: selected === item.text ? "#66ff66" : "transparent",
                     "&:hover": { backgroundColor: selected === item.text ? "#50cc50" : "#f0f0f0" }
                   }}
                   >
                     <ListItemIcon sx={{ color: selected === item.text ? "#fff" : "#666" }}>
                       {item.icon}
                     </ListItemIcon>
                     <ListItemText primary={item.text} />
                   </ListItemButton>
                 ))}
               </List>
             </Drawer>
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
