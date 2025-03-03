import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  InputBase,
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import {
  Home,
  Assignment,
  Assessment,
  Notifications,
  BarChart,
  Analytics,
  Logout,
  Search as SearchIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { LineChart, Line, BarChart as BChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import logo from "./assets/Logo.png";
import LanguageDropDown from "./components/LanguageDropDown";
import { useNavigate } from "react-router-dom";
import { color } from "chart.js/helpers";

const menuItems = [
  { text: "Home", icon: <Home />, path: "/home" },
  { text: "Assignments", icon: <Assignment />, path: "/assignment" },
  { text: "Submission Evaluation", icon: <Assessment />, path: "/submissionevaluation" },
  { text: "Progress Monitoring", icon: <BarChart />, path: "/progressmonitoring" },
  { text: "Notifications", icon: <Notifications />, path: "/judgenotification" },
  { text: "Reports & Analysis", icon: <Analytics />, path: "/report" },
  { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" }
];

const evaluationData = [
  { name: "Judge A", value: 75 },
  { name: "Judge B", value: 60 },
  { name: "Judge C", value: 90 },
  { name: "Judge D", value: 55 },
  { name: "Judge E", value: 80 },
];

const challengeScores = [
  { name: "Challenge 1", score: 8 },
  { name: "Challenge 2", score: 7.5 },
  { name: "Challenge 3", score: 8.2 },
  { name: "Challenge 4", score: 7.8 },
];

const ReportsAnalytics = () => {
  const navigate = useNavigate();
  
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selected, setSelected] = useState("Reports & Analysis");

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f9f9f9" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 260,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 260, boxSizing: "border-box", marginTop: "85px" },
        }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={index} onClick={() => {
              setSelected(item.text);
              navigate(item.path);
            }}
            sx={{
              borderRadius: "10px",
              marginBottom: "8px",
              margin: "6px",
              backgroundColor: selected === item.text ? "#66ff66" : "transparent",
              "&:hover": { backgroundColor: selected === item.text ? "#50cc50" : "#f0f0f0" }
            }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
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
            <Button sx={{ borderRadius: "25px" }}>JudgeName</Button>
          </Box>
        </Toolbar>
      </AppBar>

        {/* Dashboard Metrics */}
        <Grid container spacing={3} marginTop={8}>
          {["Total Submissions: 1,247", "Average Score: 8.4", "Active Judges: 28"].map((text, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Card sx={{ padding: 2, textAlign: "center", borderRadius: "12px" }}>
                <Typography>{text}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={3} marginTop={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 2, borderRadius: "12px" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">Evaluation Progress by Judge</Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BChart data={evaluationData} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4285F4" />
                  </BChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 2, borderRadius: "12px" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">Average Scores per Challenge</Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={challengeScores}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#34A853" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReportsAnalytics;