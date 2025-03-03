import React, { useState } from "react";
import ProfileUpdate from "./components/ProfileUpdation";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  AppBar,
  Toolbar,
  InputBase,
} from "@mui/material";
import Avatar from "./components/Avatars";
import {
  Search as SearchIcon,
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
  Message as MessageIcon,
  AttachFile as AttachFileIcon,
  Image as ImageIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "./assets/Logo.png";
import Buttons from "./components/ButtonDropDown";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdation from "./components/ProfileUpdation";

export default function ThreeCardsLayout() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Team");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


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
    { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" },
  ];

  const handleSelect = (item) => {
    setSelected(item.text);
    navigate(item.path);
  };
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
<Box sx={{ display: "flex" }}>
  <Box
    sx={{
      width: "250px",
      height: "100vh",
      borderRight: "1px solid #ccc",
      backgroundColor: "#fff",
      padding: "20px",
    }}
  >
    <List sx={{ paddingTop: 10 }}>
      {menuItems.map((item, index) => (
        <ListItemButton
          key={index}
          onClick={() => handleSelect(item)}
          sx={{
            borderRadius: "10px",
            marginBottom: "8px",
            backgroundColor: selected === item.text ? "#66ff66" : "transparent",
            "&:hover": {
              backgroundColor: selected === item.text ? "#50cc50" : "#f0f0f0"
            }
          }}
        >
          <ListItemIcon sx={{ color: item.color === "red" ? "red" : "#000" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            sx={{
              color:
                selected === item.text
                  ? "#000"
                  : item.color === "red"
                  ? "red"
                  : "#000",
              fontWeight: selected === item.text ? "bold" : "normal"
            }}
          />
        </ListItemButton>
      ))}
    </List>
  </Box>

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
              <Button sx={{ color: "#000" }} onClick={() => navigate("/practice")}>Practice</Button>
              <Buttons />
              <LanguageDropDown />
              <Avatar onClick={openDrawer} />
              <ProfileUpdate open={isDrawerOpen} onClose={closeDrawer} />
              <Button variant="outlined" sx={{ borderRadius: "25px" }}>Host</Button>
            </Box>
          </Toolbar>
        </AppBar>

    <Box sx={{ mt: 10, p: 2 }}>
      <Typography variant="h6" fontWeight="bold">Group Discussions</Typography>
      <Card sx={{ mt: 2, p: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar />
          <Typography variant="body1">Shamsinga Roy</Typography>
        </Stack>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Just finished the initial wireframes for the new dashboard. Would love to get everyone’s feedback!
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton><MessageIcon /></IconButton>
            <Typography variant="body2">4 Replies</Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <Typography variant="body2">2 Files</Typography>
          </Stack>
        </Stack>
      </Card>
      
      <Card sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar />
          </Stack>
          <Box sx={{ mt: 2, display: "flex", alignItems: "center", border: "1px solid #ccc",backgroundColor:"#E0FFDE" , p: 1, borderRadius: 5 }}>
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
  </Box>
</Box>
   
  );
}
