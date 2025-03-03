import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Paper,
  } from "@mui/material";
  import { Notifications } from '@mui/icons-material';

  import { LinearProgress } from '@mui/material';
  import {
    Home,
    Assignment,
    Assessment,
    BarChart,
    Analytics,
    Logout,
  } from "@mui/icons-material";
import { Line } from "react-chartjs-2";
import { Search as SearchIcon } from "@mui/icons-material";

import logo from "./assets/Logo.png";
import LanguageDropDown from "./components/LanguageDropDown";
import "chart.js/auto";

const ProgressMonitoring = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Submissions",
        data: [60, 65, 70, 75, 80, 90],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Evaluations",
        data: [50, 55, 60, 65, 70, 80],
        borderColor: "green",
        fill: false,
      },
    ],
  };
const menuItems = [
  { text: "Home", icon: <Home />, path: "/home" },
  { text: "Assignments", icon: <Assignment />, path: "/assignment" },
  { text: "Submission Evaluation", icon: <Assessment />, path: "/submissionevaluation" },
  { text: "Progress Monitoring", icon: <BarChart />, path: "/progressmonitoring" },
  { text: "Notifications", icon: <Notifications /> ,path: "/judgenotification" },
  { text: "Reports & Analysis", icon: <Analytics />, path: "/report" },
  { text: "Logout", icon: <Logout />, path: "/out" },
];
  const candidates = [
    { name: "Sarah Johnson", status: "Completed", progress: 95 },
    { name: "Michael Chen", status: "In Progress", progress: 88 },
    { name: "Emily Davis", status: "Completed", progress: 92 },
    { name: "James Wilson", status: "Pending", progress: 78 },
    { name: "Lisa Anderson", status: "In Progress", progress: 85 },
  ];
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Progress Monitoring");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleSelect = (item) => {
    setSelected(item.text);
    navigate(item.path);  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "#f9f9f9" }}>
      <Drawer
         variant="permanent"
         sx={{
           width: 260,
           flexShrink: 0,
           [`& .MuiDrawer-paper`]: { width: 260, boxSizing: "border-box", marginTop: "85px" },
         }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton  key={index} 
            onClick={() => handleSelect(item)}
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

      {/* Dashboard Stats */}
      <Box sx={{ display: "flex", gap: 2, margin: 3 ,paddingTop: "100px",paddingLeft: "260px" }}>
        {["Total Submissions: 1,234", "Evaluated Submissions: 956", "Pending Evaluations: 278", "Average Score: 87.5"].map((text, idx) => (
          <Card key={idx} sx={{ flex: 1, padding: 1, textAlign: "center", borderRadius: "12px" }}>
            <Typography>{text}</Typography>
          </Card>
        ))}
      </Box>

      {/* Line Chart */}
      <Card sx={{ margin: 3, padding: 2, borderRadius: "12px" , width: "1010px" ,alignSelf: "end"}}>
        <Typography variant="h6">Submission Status Overview</Typography>
        <Line data={chartData} />
      </Card>

      {/* Candidate Progress */}
      <TableContainer component={Paper} sx={{ margin: 5, borderRadius: "12px" , width: "1020px" ,alignSelf: "end"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate, idx) => (
              <TableRow key={idx}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.status}</TableCell>
                <TableCell>
                  <LinearProgress variant="determinate" value={candidate.progress} />
                </TableCell>
                <TableCell>{candidate.progress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProgressMonitoring;
