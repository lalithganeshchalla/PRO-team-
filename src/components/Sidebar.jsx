import React, { useState } from "react";
import { 
  Box, Avatar, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AccountCircle as AccountCircleIcon,
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
import profileImage from "../assets/user.png";

const Sidebar = () => {
  const [selected, setSelected] = useState("Levels");
  const navigate = useNavigate();

  const [imageError, setImageError] = useState(false);
  const handleImageError = () => setImageError(true);

  const user = { name: "Master Code", email: "Mastercode@example.com" };

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
    <Box sx={{ 
      width: "250px", 
      minHeight: "100vh", 
      background: "#fff", 
      padding: "20px", 
      display: "flex", 
      flexDirection: "column",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
    }}>
      
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
        <Avatar 
          sx={{ bgcolor: "#66ff66", width: 50, height: 50 }} 
          src={imageError ? "" : profileImage} 
          onError={handleImageError}
        >
          {imageError ? <AccountCircleIcon sx={{ fontSize: 40, color: "#fff" }} /> : null}
        </Avatar>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>{user.name}</Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>{user.email}</Typography>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 2 }} />

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
  );
};

export default Sidebar;
