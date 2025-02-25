import React, { useState } from "react";
import { 
  Box, Avatar, Typography, Divider, List, ListItemButton, ListItemIcon, ListItemText 
} from "@mui/material";
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
import profileImage from "./popup.png"; // Update with your image path

const Sidebar = ({ onSelect }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => setImageError(true);

  const user = { name: "Master Code", email: "Mastercode@example.com" };

  // Menu items with icons
  const menuItems = [
    { text: "Activities", icon: <EventIcon />},
    { text: "Team", icon: <TeamIcon /> },
    { text: "Levels", icon: <LevelsIcon /> },
    { text: "Leaderboard", icon: <LeaderboardIcon /> },
    { text: "Applied Activities", icon: <AppliedActivitiesIcon /> },
    { text: "Tasks", icon: <TasksIcon /> },
    { text: "Notifications", icon: <NotificationsIcon /> },
    { text: "Transactions", icon: <TransactionsIcon /> },
    { text: "Support", icon: <SupportIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Logout", icon: <LogoutIcon />, color: "red" } // Logout item marked with red color
  ];

  return (
    <Box sx={{ 
      width: "250px", 
      minHeight: "100vh", 
      background: "#f5f5f5", 
      padding: "20px", 
      display: "flex", 
      flexDirection: "column",
      boxShadow: "2px 0 5px rgba(0,0,0,0.1)"
    }}>
      
      {/* Profile Section */}
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

      {/* Navigation Menu */}
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton 
            key={index} 
            onClick={() => onSelect(item.text)}
            sx={{ 
              borderRadius: "10px", 
              marginBottom: "8px", 
              backgroundColor: item.text === "Levels" ? "#66ff66" : "transparent", // Green background only for Levels
              "&:hover": { backgroundColor: item.text === "Levels" ? "#50cc50" : "#ddd" } // Slightly darker green on hover
            }}
          >
            <ListItemIcon sx={{ color: item.color === "red" ? "red" : "#000" }}> {/* Red icon for Logout */}
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ color: item.color === "red" ? "red" : "#000", fontWeight: item.color === "red" ? "bold" : "normal" }} // Red text for Logout
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
