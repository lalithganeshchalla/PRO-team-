import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Avatar,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  InputBase,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
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
import { 
  Search as SearchIcon,
  AccessTime as TimerIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/ButtonDropDown';
import LanguageDropDown from '../components/LanguageDropDown';
import ProfileUpdate from '../components/ProfileUpdation';
import logo from '../assets/Logo.png';

export default function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState('upi');
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selected, setSelected] = useState("Transactions");

  const navigate = useNavigate();

 

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`;
  };
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
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

 
  const handleSelect = (path) => {
    setSelected(path); // Save the path of the selected item
    navigate(path); // Navigate to the corresponding route
  };
  const location = useLocation();
useEffect(() => {
  setSelected(location.pathname);
}, [location.pathname]);
  return (
    <Box sx={{ display: 'flex',pl: 2 }}>
      {/* Sidebar */}
      <List sx={{paddingTop: 13}}>
        {menuItems.map((item, index) => (
          <ListItemButton 
          key={index} 
          onClick={() => handleSelect(item.path)} // Use path for navigation and highlighting
          sx={{ 
            borderRadius: "10px", 
            marginBottom: "8px", 
            backgroundColor: selected === item.path ? "#66ff66" : "transparent",
            "&:hover": { backgroundColor: selected === item.path ? "#50cc50" : "#f0f0f0" }
          }}
        >
          <ListItemIcon sx={{ color: item.color }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.text} 
            sx={{ 
              color: selected === item.path ? "#000" : item.color, 
              fontWeight: selected === item.path ? "bold" : "normal" 
            }} 
          />
        </ListItemButton>
        ))}
      </List>

      {/* Main Content */}
      <Box sx={{ flexGrow: 2, p: 2 }}>
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

        <Box sx={{ mt: 10, p: 2 }}>
          <Typography variant="h5" fontWeight="bold">Payment Options</Typography>
          <Card sx={{ background: "#fff8c4", p: 2, my: 2 }}>
            <Typography variant="h6" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              Complete payment in <TimerIcon sx={{ mx: 1 }} /> {formatTime(timeLeft)}
            </Typography>
          </Card>

          <FormControl>
            <RadioGroup value={selectedOption} onChange={handleOptionChange}>
              <Card sx={{ background: "#d0e7ff", p: 2, mb: 2 }}>
                <FormControlLabel
                  value="upi"
                  control={<Radio />}
                  label="UPI"
                />
              </Card>
              <Card sx={{ p: 2, mb: 2 }}>
                <FormControlLabel
                  value="wallets"
                  control={<Radio />}
                  label="Wallets"
                />
              </Card>
              <Card sx={{ p: 2, mb: 2 }}>
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Credit / Debit / ATM Card"
                />
              </Card>
              <Card sx={{ p: 2, mb: 2 }}>
                <FormControlLabel
                  value="netBanking"
                  control={<Radio />}
                  label="Net Banking"
                />
              </Card>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
