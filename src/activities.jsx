import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Avatar,
  TextField,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Switch,
} from "@mui/material";
import {
  Dashboard,
  People,
  EmojiEvents,
  Task,
  Notifications,
  Payment,
  Support,
  Settings,
  ExitToApp,
  Language,
  Brightness4,
  Add,
  ExpandMore,
  Search,
  ArrowDropDown,
  Share,
} from "@mui/icons-material";
import masterCodeImage from "./assets./master_code_image.png"; 


const menuItems = [
  { text: "Activities", icon: <Dashboard /> },
  { text: "Teams", icon: <People /> },
  { text: "Levels", icon: <EmojiEvents /> },
  { text: "Leaderboard", icon: <EmojiEvents /> },
  { text: "Applied Activities", icon: <Task /> },
  { text: "Tasks", icon: <Task /> },
  { text: "Notifications", icon: <Notifications /> },
  { text: "Transactions", icon: <Payment /> },
  { text: "Support", icon: <Support /> },
  { text: "Settings", icon: <Settings /> },
  { text: "Logout", icon: <ExitToApp />, textColor: "red" },
];

export default function ThreeCardsLayout() {
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filter, setFilter] = useState("All");
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", gap: 2, p: 2 }}>
      <Card sx={{ width: "100%", height: 80, display: "flex", alignItems: "center", px: 2, mb: 2, justifyContent: "space-between" }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%", color: "black", p: 0, "&:last-child": { p: 0 } }}>
          
          <img src={masterCodeImage} alt="Logo" style={{ maxWidth: "150px", maxHeight: "20", marginRight: "15px" }} />
          
          <TextField variant="outlined" placeholder="Search..." size="small" sx={{ width: 250, ml: 2 }} />
          
          <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1, justifyContent: "flex-end" }}>
            {"Internships Jobs Competitions Mentors Practice".split(" ").map((item, index) => (
              <Typography key={index} variant="body1" color="black">{item}</Typography>
            ))}
            <Typography variant="body1" color="black">More</Typography>
            <IconButton><ExpandMore /></IconButton>
            <IconButton><Language /></IconButton>
            <IconButton><Brightness4 /></IconButton>
            <IconButton><Notifications /></IconButton>
            <Avatar />
            <Button variant="contained" startIcon={<Add />}>Host</Button>
          </Stack>
        </CardContent>
      </Card>

      
      <Box sx={{ display: "flex", flexGrow: 1, gap: 2 }}>
        
        <Card sx={{ width: 200, height: "90%", display: "flex", flexDirection: "column", alignItems: "center", p: 2, borderRadius: 0 }}>
          <CardContent sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Avatar />
              <Typography variant="h6">User Name</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary">user@example.com</Typography>
            <Divider sx={{ my: 1, width: "100%" }} />
            <Stack spacing={2}>
              {menuItems.map((item, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, pl: 1 }}>
                  {item.icon}
                  <Typography variant="body1" sx={{ color: item.textColor || "black" }}>{item.text}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>

        
        <Card sx={{ flexGrow: 1, height: "90%", display: "flex", flexDirection: "column", p: 2 }}>
          <CardContent sx={{ color: "black" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 0 }}>Activities</Typography>
            <Divider sx={{ mt: 1, width: "100%" }} />

        
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

            
            <Card sx={{ mt: 2, p: 2, backgroundColor: "#f9f9f9", display: "flex", flexDirection: "column", gap: 2 }}>
              
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img src={masterCodeImage} alt="Event" style={{ width: 80, height: 30, borderRadius: 8 }} />
                  <Box>
                    <Typography variant="h6">Master Code Talent Room 2025</Typography>
                    <Typography variant="body2">Registered on: Feb 7, 2025, 07:35 PM IST</Typography>
                    <Typography variant="body2">Deadline: Feb 14, 2025</Typography>
                  </Box>
                </Box>

                
                <Stack direction="row" alignItems="center">
                  <Typography variant="body2">Email Notifications</Typography>
                  <Switch
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                  />
                </Stack>
              </Box>

              
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "blue" }}>Registration Form</Typography>
                <IconButton color="primary">
                  <Share />
                </IconButton>
              </Box>
            </Card>
             
             <Box sx={{ textAlign: "center", mt: 17, mb: 2 }}>
              <Typography variant="body1" >You have not applied to any Opportunity.</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>Keep Applying!</Typography>
              <Button variant="contained" sx={{ mt: 1 }}>Explore Now</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
