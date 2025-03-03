import React, { useState } from "react";
import { Box, AppBar, Toolbar, Button, InputBase, Avatar, Drawer, List, ListItemButton, ListItemIcon, ListItemText,Typography,MenuItem,TextField,InputAdornment,Select } from "@mui/material";
import {  Logout as LogoutIcon, Search as SearchIcon } from "@mui/icons-material";
import { Home, Assignment, Assessment, Notifications, BarChart, Analytics, Logout } from "@mui/icons-material";
import ProfileUpdation from "./components/ProfileUpdation";

import {
  Notifications as NotificationsIcon,
  AccessTime as AccessTimeIcon,
  ErrorOutline as ErrorOutlineIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import logo from "./assets/Logo.png";
import LanguageDropDown from "./components/LanguageDropDown";
import { useNavigate } from "react-router-dom";


const notificationsData = [
  {
    id: 1,
    title: "Urgent: System Maintenance Required",
    description: "Critical system updates need to be applied within the next 24 hours.",
    time: "2 hours ago",
    priority: "high",
    section: "Today",
  },
  {
    id: 2,
    title: "Evaluation Deadline Approaching",
    description: "15 candidate evaluations pending review - due in 48 hours.",
    time: "4 hours ago",
    priority: "medium",
    section: "Today",
  },
  {
    id: 3,
    title: "Updated Judging Guidelines",
    description: "New evaluation criteria have been added for the technical assessment round.",
    time: "1 day ago",
    priority: "low",
    section: "Yesterday",
  },
  {
    id: 4,
    title: "Weekly Performance Report",
    description: "Your weekly evaluation performance metrics are now available.",
    time: "1 day ago",
    priority: "low",
    section: "Yesterday",
  },
  {
    id: 5,
    title: "Security Protocol Update",
    description: "New security measures have been implemented for evaluation access.",
    time: "2 days ago",
    priority: "high",
    section: "Earlier",
  },
  {
    id: 6,
    title: "Competition Schedule Change",
    description: "The final round evaluation dates have been adjusted.",
    time: "3 days ago",
    priority: "low",
    section: "Earlier",
  },
];
const menuItems = [
  { text: "Home", icon: <Home /> ,path: "/home" },
  { text: "Assignments", icon: <Assignment /> ,path: "/assignment" },
  { text: "Submission Evaluation", icon: <Assessment /> ,path: "/submissionevaluation" },
  { text: "Progress Monitoring", icon: <BarChart /> ,path: "/progressmonitoring" },,
  { text: "Notifications", icon: <Notifications /> ,path: "/judgenotification" },
  { text: "Reports & Analysis", icon: <Analytics /> ,path: "/report" },
  { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" }
];
const JudgeNotification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
const navigate = useNavigate();
  const [selected, setSelected] = useState("Notifications");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleSelect = (item) => {
    setSelected(item.text);
    navigate(item.path);  };
  const filteredNotifications = notificationsData.filter((notification) =>
    notification.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ paddingTop: "100px", maxWidth: "900px", margin: "auto",paddingLeft:"230px" }}>
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
            <ProfileUpdation open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Button sx={{ borderRadius: "25px" }}>JudgeName</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
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

      <Box sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
        <Typography variant="h5" fontWeight="bold">
          Notifications & Alerts
        </Typography>
        <Button variant="contained" sx={{ background: "#007bff", color: "#fff" }}>
          Notification Settings
        </Button>
      </Box>
      <Typography sx={{ color: "gray", marginBottom: "20px" }}>
        Manage your notifications and system alerts
      </Typography>

      {/* Search and Filters */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: "20px" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search notifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <MenuItem value="All">All Types</MenuItem>
          <MenuItem value="High">High Priority</MenuItem>
          <MenuItem value="Medium">Medium Priority</MenuItem>
          <MenuItem value="Low">Low Priority</MenuItem>
        </Select>
      </Box>

      {/* Notification Sections */}
      {["Today", "Yesterday", "Earlier"].map((section) => (
        <Box key={section} sx={{ marginBottom: "20px" }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#555", marginBottom: "10px" }}>
            {section}
          </Typography>
          {filteredNotifications
            .filter((notification) => notification.section === section)
            .map((notification) => (
              <Box
                key={notification.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                  background: "#f9f9f9",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {notification.priority === "high" ? (
                    <ErrorOutlineIcon sx={{ color: "red" }} />
                  ) : notification.priority === "medium" ? (
                    <NotificationsIcon sx={{ color: "blue" }} />
                  ) : (
                    <CheckCircleIcon sx={{ color: "green" }} />
                  )}
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      {notification.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {notification.description}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <AccessTimeIcon sx={{ fontSize: 16, color: "gray" }} />
                  <Typography variant="body2" color="textSecondary">
                    {notification.time}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default JudgeNotification;
