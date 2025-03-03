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
  LinearProgress,
  Menu,
} from "@mui/material";
import { CheckCircle, MenuBook, TrendingUp } from "@mui/icons-material";

import {
  Home,
  Assignment,
  Assessment,
  Notifications,
  BarChart,
  Analytics,
  Logout,
  Search as SearchIcon,
  FilterList,
  Sort,
  CalendarToday,
  AccessTime,
} from "@mui/icons-material";
import logo from "./assets/Logo.png";
import LanguageDropDown from "./components/LanguageDropDown";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Home", icon: <Home />, path: "/home" },
  { text: "Assignments", icon: <Assignment />, path: "/assignment" },
  { text: "Submission Evaluation", icon: <Assessment />, path: "/submissionevaluation" },
  { text: "Progress Monitoring", icon: <BarChart />, path: "/progressmonitoring" },
  { text: "Notifications", icon: <Notifications />, path: "/judgenotification" },
  { text: "Reports & Analysis", icon: <Analytics />, path: "/report" },
  { text: "Logout", icon: <Logout />, path: "/out" },
];

const assignmentsData = [
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
  {
    title: "Advanced Data Structures Implementation",
    dueDate: "2024-02-20",
    category: "Programming",
    difficulty: "Hard",
    status: "In Progress",
    progress: 50,
  },
];
const stats = [
  { title: "Total Assignments", value: 12, icon: <MenuBook />, change: "+2.5%" },
  { title: "Pending Tasks", value: 5, icon: <AccessTime />, change: "+12.5%" },
  { title: "Complete Assignments", value: 8, icon: <CheckCircle />, change: "-3.5%" },
  { title: "Success ", value: "94%", icon: <Analytics />, change: "+1.5%" },
];
const Assignments = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Assignments");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleSelect = (item) => {
    setSelected(item.text);
    navigate(item.path);
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "#f9f9f9" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{ width: 260, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 260, marginTop: "85px" } }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={() => {
                setSelected(item.text);
                navigate(item.path);
              }}
              sx={{
                borderRadius: "10px",
                margin: "6px",
                backgroundColor: selected === item.text ? "#66ff66" : "transparent",
                "&:hover": { backgroundColor: "#50cc50" },
              }}
            >
              <ListItemIcon sx={{ color: "#000" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box>
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
            {/* <ProfileUpdation open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} /> */}
            <Button sx={{ borderRadius: "25px" }}>JudgeName</Button>
          </Box>
        </Toolbar>
      </AppBar>

        {/* Dashboard Cards */}
        <Box display="flex" gap={2} mb={2} pl={2} pt={12}>
              {stats.map((stat, index) => (
                <Card key={index} sx={{ width: 220, textAlign: "right", padding: 2 ,borderRadius: 5, boxShadow: 3 , height: 120}}>
                  <CardContent>
                    {stat.icon}
                    <Typography variant="h6" sx={{textAlign: 'left'}}>{stat.value}</Typography>
                    <Typography variant="body2" sx={{textAlign: 'left'}}>{stat.title}</Typography>
                    <Typography variant="caption" color="green" sx={{textAlign: 'right'}}>{stat.change}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

        {/* Filter & Sort */}
        <Box sx={{ display: "flex", gap: 2, marginTop: 3, alignItems: "center", paddingLeft: 2  }}>
          <Button variant="outlined" startIcon={<FilterList />}>Filter</Button>
          <Button variant="outlined" startIcon={<Sort />}>Sort</Button>
        </Box>

        {/* Assignment Cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 3, marginTop: 3, paddingLeft: 2 }}>
          {assignmentsData.map((assignment, idx) => (
            <Card key={idx} sx={{ padding: 2, borderRadius: "12px", boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{assignment.title}</Typography>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center", marginTop: 1 }}>
                  <CalendarToday fontSize="small" />
                  <Typography variant="body2">Due {assignment.dueDate}</Typography>
                  <Typography variant="body2" sx={{ color: "red", marginLeft: "auto" }}>{assignment.difficulty}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                  <AccessTime fontSize="small" />
                  <Typography variant="body2" sx={{ marginLeft: 1 }}>{assignment.status}</Typography>
                </Box>
                <LinearProgress variant="determinate" value={assignment.progress} sx={{ marginTop: 2 }} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Assignments;
