import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase, Avatar, Menu, MenuItem, Button } from "@mui/material";
import { Search as SearchIcon, ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/user.png";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { label: "Competitions", path: "/competitions" },
    { label: "Jobs", path: "/jobs" },
    { label: "Mentors", path: "/mentors" },
    { label: "Practice", path: "/practice" },
    { label: "More", path: "/more" }
  ];

  return (
    <AppBar position="static" sx={{ background: "#fff", boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        {/* Logo and Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography 
            variant="h5" 
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer", color: "#33cc33", fontWeight: "bold" }}
          >
            Master<span style={{ color: "#000" }}>Code</span>
          </Typography>
          
          {/* Navigation Links */}
          {menuItems.map((item, index) => (
            <Button 
              key={index} 
              onClick={() => navigate(item.path)} 
              sx={{ color: "#000", fontWeight: "500", textTransform: "none" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", background: "#f0f0f0", borderRadius: "20px", padding: "2px 10px" }}>
          <SearchIcon color="action" />
          <InputBase 
            placeholder="Search Hackathons" 
            sx={{ ml: 1, flex: 1 }} 
          />
        </Box>

        {/* Profile and Settings */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar 
            src={profileImage} 
            alt="Profile" 
            sx={{ cursor: "pointer" }} 
            onClick={handleMenuOpen} 
          />
          <ArrowDropDownIcon sx={{ cursor: "pointer" }} onClick={handleMenuOpen} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
