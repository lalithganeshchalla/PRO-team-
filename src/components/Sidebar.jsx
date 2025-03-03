import React, { useState } from "react";
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {Event as EventIcon,
  Group as TeamIcon,
  SignalCellularAlt as LevelsIcon,
  EmojiEvents as LeaderboardIcon,
  Work as AppliedActivitiesIcon,
  Assignment as TasksIcon,
  Notifications as NotificationsIcon,
  Payment as TransactionsIcon,
  Support as SupportIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon } from "@mui/icons-material";
  const Sidebar = () => {
  const [selected, setSelected] = useState("Levels");
  const navigate = useNavigate();
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
      background: "#fff", 
      padding: "20px",
    }}>
      <Divider sx={{ marginBottom: 2 }} />
      <List sx={{ width: "100%", maxWidth: 360, paddingTop:8 }}>
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
