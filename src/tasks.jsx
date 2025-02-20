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
import masterCodeImage from "./assets./master_code_image"; // Navigation logo

import taskImage from "./assets./taskImage.png"; // Navigation logo

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
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", gap: 0.6, p: 2 }}>
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
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, pl: 1,            bgcolor: item.text === "Tasks" ? "lightgreen" : "transparent" 
                }}>
                  {item.icon}
                  <Typography variant="body1" sx={{ color: item.textColor || "black" }}>{item.text}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>

    
        <Card sx={{ flexGrow: 1, height: "90%", display: "flex", flexDirection: "column", p: 2 }}>
          <CardContent sx={{ color: "black" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 0 }}>Tasks</Typography>
            <Divider sx={{ mt: 1, width: "100%" }} />
             
<Box sx={{ mt: 2, display: "flex", justifyContent: "",color:"black"
 }}>
  <Stack
    direction="row"
    spacing={1.7}
    sx={{ flexWrap: "wrap", justifyContent: "center", color: "black" }}
  >
    {[
      "All", "Competitions", "Quizzes", "Activities", "Scholarships", 
      "Internships", "Jobs", "Workshops", "Conferences", 
      "Creative Events", "Festivals"
    ].map((category) => (
      <Typography key={category} variant="body">
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

        
            <Card sx={{ mt: 2, p: 2, backgroundColor: "#f9f9f9", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
  
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <img src={taskImage} alt="Event" style={{ width: 300, height: 200, borderRadius: 4 }} />
  </Box>

  
  <Box sx={{ textAlign: "center", mt: 2 }}>
    <Typography variant="body1">You have not applied to any Opportunity.</Typography>
    <Typography variant="body2" sx={{ color: "gray" }}>Keep Applying!</Typography>
    <Button variant="contained" sx={{ mt: 1 }}>Explore Now</Button>
  </Box>
</Card>

             
             
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
