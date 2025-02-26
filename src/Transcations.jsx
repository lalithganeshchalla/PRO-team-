import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  IconButton,
  Divider,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Star as StarIcon,
  HowToReg as RegisterIcon,
  Search as SearchIcon,
  EmojiEvents as TrophyIcon,
  Event as EventIcon,
  Group as TeamIcon,
  SignalCellularAlt as LevelsIcon,
  Work as AppliedActivitiesIcon,
  Assignment as TasksIcon,
  Notifications as NotificationsIcon,
  Payment as TransactionsIcon,
  Support as SupportIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";
import logo from "./assets/Logo.png";
import ProfileUpdate from "./components/ProfileUpdation";
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import Avatar from "./components/Avatars";

const Transaction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Activities", icon: <EventIcon />, path: "/activities" },
    { text: "Teams", icon: <TeamIcon />, path: "/teams" },
    { text: "Levels", icon: <LevelsIcon />, path: "/levels" },
    { text: "Leaderboard", icon: <TrophyIcon />, path: "/leaderboard" },
    { text: "Applied Activities", icon: <AppliedActivitiesIcon />, path: "/applied" },
    { text: "Tasks", icon: <TasksIcon />, path: "/tasks" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
    { text: "Transactions", icon: <TransactionsIcon />, path: "/transactions" },
    { text: "Support", icon: <SupportIcon />, path: "/support" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" },
  ];

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleSelect = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0", maxWidth: "100%", top: 0 }}>
        <Toolbar sx={{ display: "flex" }}>
          <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px", color: "#b5b5b5" }}>
              <SearchIcon />
              <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1 }} />
            </Box>
            <Button sx={{ color: "#000" }} onClick={() => navigate("/internship")}>Internships</Button>
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
      <Box
        sx={{
          width: "240px",
          height: "100vh",
          backgroundColor: "#fff",
          padding: "20px",
          borderRight: "1px solidrgb(255, 255, 255)",
        }}
      >
        <List sx={{ paddingTop: 0 }}>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={() => handleSelect(item.path)}
              sx={{
                borderRadius: "10px",
                marginBottom: "8px",
                backgroundColor:
                  location.pathname === item.path ? "#66ff66" : "transparent",
                "&:hover": {
                  backgroundColor:
                    location.pathname === item.path ? "#50cc50" : "#f0f0f0",
                },
              }}
            >
              <ListItemIcon sx={{ color: item.color }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  color: location.pathname === item.path ? "#000" : item.color,
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "20px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          Transaction
        </Typography>
        <Box sx={{ padding: 3, borderRadius: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Box sx={{ width: "60%", textAlign: "center", paddingRight: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                Master Code Talent Room 2025
              </Typography>
              <Typography variant="body1">Master Code</Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  color: "gray",
                }}
              >
                <CalendarIcon sx={{ fontSize: 16, marginRight: 1 }} />
                Updated on: May 10, 2025
              </Typography>
              <Box
                sx={{
                  padding: 3,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  minHeight: "100px",
                  mt: 2,
                }}
              >
                <TrophyIcon sx={{ fontSize: 40, color: "gold" }} />
                <Box sx={{ maxWidth: "350px", textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Grab pre-placement offers
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    & cash prizes worth ₹3,53,000
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "40%",
                textAlign: "left",
                paddingLeft: 3,
                backgroundColor: "#fff",
                padding: 3,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  ₹499/-
                </Typography>
                <Box>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                  <IconButton>
                    <CalendarIcon color="action" />
                  </IconButton>
                  <IconButton>
                    <ShareIcon color="primary" />
                  </IconButton>
                </Box>
              </Box>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/pay")}>
                Pay Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Transaction;
