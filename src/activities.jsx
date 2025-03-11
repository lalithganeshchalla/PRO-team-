import React, { useState } from "react";
import { 
  Box, AppBar, Toolbar, Card, CardContent, Typography, Stack, TextField, 
  IconButton, Button, Menu, MenuItem, ToggleButtonGroup, ToggleButton, 
  Switch, InputBase, Divider, List, ListItemButton, 
  ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Search, ArrowDropDown, Share } from "@mui/icons-material";
import logo from "./assets/Logo.png";
import profileImage from "./assets/user.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdation from "./components/ProfileUpdation";
import Avatar from "./components/Avatars";
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
  Logout as LogoutIcon,
} from "@mui/icons-material";
export default function ThreeCardsLayout() {
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filter, setFilter] = useState("All");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [selected, setSelected] = useState("Activities");
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  const handleSortClick = (event) => setSortAnchorEl(event.currentTarget);
  const handleSortClose = () => setSortAnchorEl(null);
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) setFilter(newFilter);
  };
  const handleImageError = () => setImageError(true);
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <Box sx={{ display: 'flex' }}>
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
      </Box>
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
      {/* Main Content */}
      {/* Main Content */}
      <Box sx={{ flexGrow: 2, overflow: "auto" }}>
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
            <Button sx={{ color: "#000" }} onClick={() => navigate("/oractice")}>Practice</Button>
            <Buttons />
            <LanguageDropDown />
            <Avatar openDrawer={openDrawer} />
            <ProfileUpdation open={isDrawerOpen} onClose={closeDrawer} />
            <Button variant="outlined" sx={{ borderRadius: "25px" }}>Host</Button>
            </Box>
          </Toolbar>
        </AppBar>   
        <Card sx={{ flexGrow: 1, height: "90%", display: "flex", flexDirection: "column", p: 2 }}>
          <CardContent sx={{ color: "black" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 0 }}>Activities</Typography>
            <Divider sx={{ mt: 1, width: "100%" }} />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "",color:"black"
            }}>
         <Stack
          direction="row"
          spacing={1.7}
            sx={{ flexWrap: "wrap", justifyContent: "center", color: "black" }}>
            {[
           "All", "Competitions", "Quizzes", "Activities", "Scholarships", 
          "Internships", "Jobs", "Workshops", "Conferences", 
      "Creative Events", "Festivals"
    ].map((category) => (
      <Typography key={category} variant="body1">
        {category}
      </Typography>
    ))}
  </Stack>
</Box>
            <Box sx={{ mt: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search Activities..."
                sx={{ width: 200 }}
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <Search />
                    </IconButton>
                  ),
                }}
              />
              <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={handleFilterChange}
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  "& .MuiToggleButton-root": { border: "none", px: 3, textTransform: "none" },
                }}
              >
                <ToggleButton value="All">All</ToggleButton>
                <ToggleButton value="Live">Live</ToggleButton>
                <ToggleButton value="Ended">Ended</ToggleButton>
              </ToggleButtonGroup>
              <Button
                variant="outlined"
                endIcon={<ArrowDropDown />}
                onClick={handleSortClick}
              >
                Sort By
              </Button>
              <Menu anchorEl={sortAnchorEl} open={Boolean(sortAnchorEl)} onClose={handleSortClose}>
                <MenuItem onClick={() => handleSortClose("Newest")}>Newest</MenuItem>
                <MenuItem onClick={() => handleSortClose("Oldest")}>Oldest</MenuItem>
                <MenuItem onClick={() => handleSortClose("Popular")}>Most Popular</MenuItem>
              </Menu>
            </Box>
            {/* New Inner Card with Email Notifications, Registration Form, and Share Button */}
            <Card sx={{ mt: 2, p: 2, backgroundColor: "#f9f9f9", display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Top Section - Image + Details + Email Notifications */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Event Image & Info */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img src={logo} alt="Event" style={{ width: 80, height: 30, borderRadius: 8 }} />
                  <Box>
                    <Typography variant="h6">Master Code Talent Room 2025</Typography>
                    <Typography variant="body2">Registered on: Feb 7, 2025, 07:35 PM IST</Typography>
                    <Typography variant="body2">Deadline: Feb 14, 2025</Typography>
                  </Box>
                </Box>

                {/* Email Notifications Switch */}
                <Stack direction="row" alignItems="center">
                  <Typography variant="body2">Email Notifications</Typography>
                  <Switch
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                  />
                </Stack>
              </Box>

              {/* Bottom Section - Registration Form & Share Button */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "blue" }}>Registration Form</Typography>
                <IconButton color="primary">
                  <Share />
                </IconButton>
              </Box>
            </Card>
             {/* Message Section (Bottom Middle) */}
             <Box sx={{ textAlign: "center", mt: 8, mb: 2 }}>
              <Typography variant="body1" >You have not applied to any Opportunity.</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>Keep Applying!</Typography>
              <Button variant="contained" sx={{ mt: 1 }} onClick={() => navigate("/activitydashboard")}>Explore Now</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
