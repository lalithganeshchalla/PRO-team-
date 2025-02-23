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
  Switch,
  InputBase
} from "@mui/material";
import {
  Notifications,
  Language,
  Brightness4,
  Add,
  ExpandMore,
  Search,
  ArrowDropDown,
  Share,
} from "@mui/icons-material";
import { AppBar, Toolbar } from "@mui/material";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdation from "./components/ProfileUpdation";
import { useNavigate } from "react-router-dom";
import Buttons from "./components/ButtonDropDown";
import logo from "./assets/Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from "./components/Avatars"
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };
  const navigate = useNavigate();
 
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", gap: 2, p: 2 }}>
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
        </AppBar>      <Card sx={{ width: "100%", height: 80, display: "flex", alignItems: "center", px: 2, mb: 2, justifyContent: "space-between" }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%", color: "black", p: 0, "&:last-child": { p: 0 } }}>
          {/* Logo */}
          <img src={logo} alt="Logo" style={{ maxWidth: "150px", maxHeight: "20", marginRight: "15px" }} />
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
                    <MenuItem onClick={() => navigate("/activites")}><AccountCircleIcon /> Activities</MenuItem>
                    <MenuItem onClick={() => navigate("/teams")}><TeamIcon /> Teams</MenuItem>
                    <MenuItem onClick={() => navigate("/levels")}><LevelsIcon />Levels</MenuItem>
                    <MenuItem onClick={() => navigate("/leaderboard")}><LeaderboardIcon />Leaderboard</MenuItem>
                    <MenuItem onClick={() => navigate("/applied")}><AppliedActivitiesIcon />Applied Activities</MenuItem>
                    <MenuItem onClick={() => navigate("/tasks")}><TasksIcon />Tasks</MenuItem>
                    <MenuItem onClick={() => navigate("/notifications")}><NotificationsIcon />Notifications</MenuItem>
                    <MenuItem onClick={() => navigate("/transactions")}><TransactionsIcon />My Transactions</MenuItem>
                    <MenuItem onClick={() => navigate("/support")}><SupportIcon />Support</MenuItem>
                    <MenuItem onClick={() => navigate("/settings")}><SettingsIcon />Settings</MenuItem>
                    <MenuItem onClick={() => navigate("/logout")}><LogoutIcon />Logout</MenuItem>
            </Stack>
          </CardContent>
        </Card>

        {/* Content Card */}
        <Card sx={{ flexGrow: 1, height: "90%", display: "flex", flexDirection: "column", p: 2 }}>
          <CardContent sx={{ color: "black" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 0 }}>Activities</Typography>
            <Divider sx={{ mt: 1, width: "100%" }} />
             {/* Category Filter (Text Format) */}
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
      <Typography key={category} variant="body1">
        {category}
      </Typography>
    ))}
  </Stack>
</Box>

            {/* Search, Filter, and Sort Row */}
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
              <Button variant="contained" sx={{ mt: 1 }}>Explore Now</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
