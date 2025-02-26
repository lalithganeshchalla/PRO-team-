import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  TextField,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText

} from "@mui/material";
import Avatar from './components/Avatars';

import {
  Notifications,
  Language,
  Brightness4,
  Add,
  ExpandMore,
  Search,
  ArrowDropDown,

  
} from "@mui/icons-material";
import logo from "./assets/Logo.png"; // Navigation logo
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
import { useNavigate } from "react-router-dom" 
import taskImage from "./assets/taskimage.png"; // Navigation logo
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdation from "./components/ProfileUpdation";
import {
  AppBar,
  Toolbar,
  InputBase,
} from "@mui/material";
import { 
  Search as SearchIcon
} from "@mui/icons-material";


export default function ThreeCardsLayout() {
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [filter, setFilter] = useState("All");

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
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Tasks");

const handleSelect = (item) => {
  setSelected(item.text);
  navigate(item.path);
};

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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const openDrawer = () => {
  setIsDrawerOpen(true);
};

const closeDrawer = () => {
  setIsDrawerOpen(false);
};

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", gap: 0.6, p: 2 }}>
      <Card sx={{ width: "100%", height: 80, display: "flex", alignItems: "center", px: 2, mb: 2, justifyContent: "space-between" }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%", color: "black", p: 0, "&:last-child": { p: 0 } }}>
        
          <img src={logo} alt="Logo" style={{ maxWidth: "150px", maxHeight: "20", marginRight: "15px" }} />
          
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
