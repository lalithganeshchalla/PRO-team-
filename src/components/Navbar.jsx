import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, InputBase, Menu, MenuItem, Avatar, IconButton, Divider } from "@mui/material";
import { Search as SearchIcon, Notifications as NotificationsIcon, Add as AddIcon, AccountCircle as AccountCircleIcon, Public as PublicIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

import profileImage from './assets/display.png'; // Ensure the image path is correct

const Navbar = () => {
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [engAnchorEl, setEngAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [active, setActive] = useState(false);

  const handleMoreClick = (event) => setMoreAnchorEl(event.currentTarget);
  const handleEngClick = (event) => setEngAnchorEl(event.currentTarget);
  const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleClose = () => {
    setMoreAnchorEl(null);
    setEngAnchorEl(null);
    setProfileAnchorEl(null);
  };
  const handleActiveClick = () => setActive(!active);
  const handleImageError = () => setImageError(true);

  const user = { name: "John Doe", email: "john.doe@example.com" };

  return (
    <AppBar position="static" sx={{ background: "#fff", boxShadow: "none", width: "100%", overflowX: "hidden", boxSizing: "border-box" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "nowrap", maxWidth: "100vw" }}>
        
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000", whiteSpace: "nowrap" }}>
          <span style={{ background: "#66ff66", padding: "5px 10px", borderRadius: "20px" }}>Master</span> Code
        </Typography>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "nowrap", overflowX: "hidden" }}>

          {/* Search Bar */}
          <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "4px 8px", borderRadius: "20px", width: 220 }}>
            <SearchIcon />
            <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1, width: "100%",fontSize: "0.9rem"}} />
          </Box>

          {/* Navigation Links */}
          {["Internships", "Jobs", "Competitions", "Mentors", "Practice"].map((item, index) => (
            <Button key={index} sx={{ color: "#000", whiteSpace: "nowrap", minWidth: "90px" }}>{item}</Button>
          ))}

          {/* More Dropdown */}
          <Button sx={{ color: "#000", display: "flex", alignItems: "center" }} onClick={handleMoreClick}>
            More <ExpandMoreIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
          </Button>
          <Menu anchorEl={moreAnchorEl} open={Boolean(moreAnchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Option 1</MenuItem>
            <MenuItem onClick={handleClose}>Option 2</MenuItem>
            <MenuItem onClick={handleClose}>Option 3</MenuItem>
          </Menu>

          {/* Language Selector */}
          <Button sx={{ color: "#000" }} onClick={handleEngClick}>
            <PublicIcon sx={{ fontSize: 20, marginRight: 0.5 }} /> Eng
          </Button>
          <Menu anchorEl={engAnchorEl} open={Boolean(engAnchorEl)} onClose={handleClose}>
            {["English", "العربية", "Deutsch", "Español", "Français", "Hindi", "中文"].map((lang, i) => (
              <MenuItem key={i} onClick={handleClose}>{lang}</MenuItem>
            ))}
          </Menu>

          {/* Active Toggle */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#e0e0e0",
              padding: "5px 10px",
              borderRadius: "20px",
              transition: "all 0.3s ease",
              position: "relative",
              width: 50,
            }}
            onClick={handleActiveClick}
          >
            <Typography variant="body2" sx={{ marginRight: 1 }}></Typography>
            <Box
              sx={{
                position: "absolute",
                left: active ? "50%" : "5px",
                top: "0px",
                width: "10px",
                height: "10px",
                backgroundColor: "#66ff66",
                borderRadius: "50%",
                transition: "left 0.3s ease",
              }}
            />
          </Box>

          {/* Notification Icon */}
          <IconButton sx={{ color: "#000" }}>
            <NotificationsIcon />
          </IconButton>

          {/* Profile Icon */}
          <IconButton onClick={handleProfileClick}>
            <Avatar sx={{ bgcolor: "#66ff66" }} src={imageError ? "" : profileImage} onError={handleImageError}>
              {imageError ? <AccountCircleIcon sx={{ fontSize: 40, color: "#fff" }} /> : null}
            </Avatar>
          </IconButton>

          {/* Profile Menu */}
          <Menu anchorEl={profileAnchorEl} open={Boolean(profileAnchorEl)} onClose={handleClose}>
            <Box sx={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar sx={{ bgcolor: "#66ff66" }} src={imageError ? "" : profileImage} onError={handleImageError}>
                {imageError ? <AccountCircleIcon sx={{ fontSize: 40, color: "#fff" }} /> : null}
              </Avatar>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>{user.name}</Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>{user.email}</Typography>
              </Box>
            </Box>
            <Divider sx={{ margin: "10px 0" }} />
            {["Activities", "Team", "Levels", "Leaderboard", "Applied Activities", "Tasks", "Notifications", "Transactions","Support", "Settings", "Logout"].map((item, index) => (
              <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
            ))}
          </Menu>

          {/* Host Button */}
          <Button sx={{ color: "#000", border: "2px solid #66ff66", borderRadius: "20px", padding: "8px 16px", display: "flex", alignItems: "center" }}>
            <AddIcon sx={{ color: "#66ff66" }} /> Host
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
