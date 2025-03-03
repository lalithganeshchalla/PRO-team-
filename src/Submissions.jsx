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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@mui/material";
import LanguageDropDown from "./components/LanguageDropDown";
import ProfileUpdation from "./components/ProfileUpdation";
import {
  Home,
  Assignment,
  Assessment,
  BarChart,
  Analytics,
  Logout as LogoutIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import logo from "./assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { Notifications } from '@mui/icons-material';

const menuItems = [
  { text: "Home", icon: <Home />, path: "/home" },
  { text: "Assignments", icon: <Assignment />, path: "/assignment" },
  { text: "Submission Evaluation", icon: <Assessment />, path: "/submissionevaluation" },
  { text: "Progress Monitoring", icon: <BarChart />, path: "/progressmonitoring" },
  { text: "Notifications", icon: <Notifications />, path: "/judgenotification" },
  { text: "Reports & Analysis", icon: <Analytics />, path: "/report" },
  { text: "Logout", icon: <LogoutIcon />, color: "red", path: "/logout" }
];

const submissions = [
  { id: 1, name: "John Doe", type: "Code", score: "" },
  { id: 2, name: "Jane Smith", type: "Document", score: "" },
  { id: 3, name: "Sam Wilson", type: "Video", score: "" },
];

const SubmissionEvaluation = () => {
  
  const [scores, setScores] = useState({});
 const navigate = useNavigate();
  const [selected, setSelected] = useState("Submission Evaluation");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleSelect = (item) => {
    setSelected(item.text);
    navigate(item.path);  };
  const handleScoreChange = (id, value) => {
    setScores({ ...scores, [id]: value });
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f9f9f9" }}>
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

      <Box sx={{ flexGrow: 1, padding: 3 }}>
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
            <ProfileUpdation open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Button sx={{ borderRadius: "25px" }}>JudgeName</Button>
          </Box>
        </Toolbar>
      </AppBar>

        <Typography variant="h5" sx={{ marginY: 3, fontWeight: "bold" }}>Submission Evaluation</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Candidate Name</TableCell>
                <TableCell>Submission Type</TableCell>
                <TableCell>Score (Out of 100)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>{submission.type}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={scores[submission.id] || ""}
                      onChange={(e) => handleScoreChange(submission.id, e.target.value)}
                      inputProps={{ min: 0, max: 100 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
          <Button variant="contained" color="secondary">Save Draft</Button>
          <Button variant="contained" color="primary">Submit Evaluation</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SubmissionEvaluation;
