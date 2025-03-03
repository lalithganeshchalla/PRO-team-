import React, { useState } from "react";
import { Box, AppBar, Toolbar, Button, InputBase, Avatar, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Assignment, Assessment, Notifications, BarChart, Analytics, Logout as LogoutIcon, Search as SearchIcon } from "@mui/icons-material";
import DashboardCards from "./components/DashboardCards";
import AssignedChallenges from "./components/AssignedChallenges";
import UpcomingDeadlines from "./components/UpcomingDeadlines";
import logo from "./assets/Logo.png";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdation from "./components/ProfileUpdation";
import { useNavigate } from "react-router-dom";
const menuItems = [
  { text: "Home", icon: <Home /> ,path: "/home" },
  { text: "Assignments", icon: <Assignment /> ,path: "/assignment" },
  { text: "Submission Evaluation", icon: <Assessment /> ,path: "/submissionevaluation" },
  { text: "Progress Monitoring", icon: <BarChart /> ,path: "/progressmonitoring" },,
  { text: "Notifications", icon: <Notifications /> ,path: "/judgenotification" },
  { text: "Reports & Analysis", icon: <Analytics /> ,path: "/report" },
  { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" }
];

const JudgeHomePage = () => {
    const navigate = useNavigate();
  const [selected, setSelected] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleSelect = (item) => {
    setSelected(item.text);
    navigate(item.path);  };
 
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
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

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginTop: "64px" }}>
        <DashboardCards />
        <Box sx={{ display: "flex", gap: 4 }}>
          <AssignedChallenges />
          <UpcomingDeadlines />
        </Box>
      </Box>
    </Box>
  );
};

export default JudgeHomePage;
