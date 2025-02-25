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


import MessageIcon from '@mui/icons-material/Message';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


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
          {/* Logo */}
          <img src={masterCodeImage} alt="Logo" style={{ maxWidth: "150px", maxHeight: "20", marginRight: "15px" }} />
          {/* Search Bar */}
          <TextField variant="outlined" placeholder="Search..." size="small" sx={{ width: 250, ml: 2 }} />
          {/* Navigation Items */}
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

      {/* Main Content */}
      <Box sx={{ display: "flex", flexGrow: 1, gap: 2 }}>
        {/* Menu Card */}
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
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, pl: 1,            bgcolor: item.text === "Teams" ? "lightgreen" : "transparent" 
                }}>
                  {item.icon}
                  <Typography variant="body1" sx={{ color: item.textColor || "black" }}>{item.text}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>

        {/* Content Card */}
        <Card sx={{ flexGrow: 1, height: "90%", display: "flex", flexDirection: "column", p: 2 }}>
  <CardContent sx={{ color: "black", display: "flex", height: "100%" }}>
    {/* Left Side (70%) */}
    <Box sx={{ flex: 7, display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>Group Discussions</Typography>
      {/* Add content here */}
       {/* Card 1 */}
    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar />
          <Typography variant="body1">Shamsinga Roy</Typography>
        </Stack>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Just finished the initial wireframes for the new dashboard. Would love to get everyone’s feedback!
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton>
              <MessageIcon />
            </IconButton>
            <Typography variant="body2">4 Replies</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <Typography variant="body2">2 Files</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>


    {/* Card 3 (with Start a Discussion feature) */}
    <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar />
          
        </Stack>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center", border: "1px solid #ccc",backgroundColor:"#E0FFDE" , p: 1 }}>
          <Typography variant="body2" sx={{ flex: 1 }}>
            Start a discussion...
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <IconButton>
            <ImageIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  
    </Box>

    {/* Vertical Divider */}
    <Divider orientation="vertical" sx={{ height: "100%", margin: "0 10px" }} />

    {/* Right Side (30%) */}
    <Box sx={{ flex: 3, display: "flex", flexDirection: "column" }}>
      {/* Add content here for the right side */}

      <Typography variant="h6" fontWeight="bold" color="black">Team Members</Typography>
      <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar />
          <Typography variant="body1">Emma Wilson</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">Developer</Typography>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar />
          <Typography variant="body1">James Chen</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">Designer</Typography>
      
        <Typography variant="h6" fontWeight="bold" color="black">Upcoming Events</Typography>
        <Card sx={{ display: "flex", flexDirection: "column",backgroundColor:"#E0FFDE" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton>
              <CalendarTodayIcon /> {/* Calendar Icon */}
            </IconButton>
            <Typography variant="body1">Team Sync Meeting</Typography>
          </Stack>
          <Typography variant="body2" color="textSecondary">Today, 2:00 P.M</Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <Avatar />
            <Avatar />
            <Typography variant="body2">+3 more</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
    
  </CardContent>
</Card>

      </Box>
    </Box>
  );
}
